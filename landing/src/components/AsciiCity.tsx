"use client";

import { useCallback, useEffect, useRef, type PointerEvent } from "react";
import { getTheme } from "@/lib/theme";

const SOURCE = "/tech-city.jpg?v=2";
const DARKEN_SHADOW = 0.36;
const DARKEN_HIGHLIGHT = 0.58;
const BLOB_RADIUS = 64;

const RAMP =
  " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
const RAMP_LAST = RAMP.length - 1;

type Cell = {
  luma: number;
  r: number;
  g: number;
  b: number;
  knockout?: boolean;
};

type AsciiCityProps = {
  src?: string;
  cropX?: number;
  cropY?: number;
  fit?: "cover" | "contain";
  knockout?: boolean;
  revealOnView?: boolean;
  className?: string;
};

type Grid = {
  cells: Cell[];
  cols: number;
  rows: number;
  cellW: number;
  cellH: number;
  font: string;
  dpr: number;
  vivid: boolean;
};

type Palette = {
  light: boolean;
  bg: [number, number, number];
  fg: [number, number, number];
  accent: [number, number, number];
};

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

function luma(r: number, g: number, b: number) {
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

function hash2(x: number, y: number) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function coverCrop(
  imgW: number,
  imgH: number,
  cols: number,
  rows: number,
  biasX = 0.62,
  biasY = 0.12,
) {
  const imageRatio = imgW / imgH;
  const canvasRatio = cols / rows;
  if (imageRatio > canvasRatio) {
    const sw = imgH * canvasRatio;
    return { sx: (imgW - sw) * biasX, sy: 0, sw, sh: imgH };
  }
  const sh = imgW / canvasRatio;
  return { sx: 0, sy: (imgH - sh) * biasY, sw: imgW, sh };
}

function drawSource(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cols: number,
  rows: number,
  options: { cropX: number; cropY: number; fit: "cover" | "contain" },
) {
  if (options.fit === "contain") {
    const imageRatio = img.width / img.height;
    const canvasRatio = cols / rows;
    let dw: number;
    let dh: number;
    let dx: number;
    let dy: number;
    if (imageRatio > canvasRatio) {
      dw = cols;
      dh = cols / imageRatio;
      dx = 0;
      dy = (rows - dh) * options.cropY;
    } else {
      dh = rows;
      dw = rows * imageRatio;
      dx = (cols - dw) * options.cropX;
      dy = 0;
    }
    ctx.clearRect(0, 0, cols, rows);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      dx,
      dy,
      Math.max(1, dw),
      Math.max(1, dh),
    );
    return;
  }

  const crop = coverCrop(
    img.width,
    img.height,
    cols,
    rows,
    options.cropX,
    options.cropY,
  );
  ctx.drawImage(img, crop.sx, crop.sy, crop.sw, crop.sh, 0, 0, cols, rows);
}

function percentile(sorted: number[], p: number) {
  const i = Math.min(
    sorted.length - 1,
    Math.max(0, Math.floor((sorted.length - 1) * p)),
  );
  return sorted[i];
}

function parseHexRgb(value: string, fallback: [number, number, number]) {
  const hex = value.trim();
  if (!hex.startsWith("#") || (hex.length !== 7 && hex.length !== 4)) {
    return fallback;
  }
  if (hex.length === 4) {
    return [
      parseInt(hex[1] + hex[1], 16),
      parseInt(hex[2] + hex[2], 16),
      parseInt(hex[3] + hex[3], 16),
    ] as [number, number, number];
  }
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ] as [number, number, number];
}

function readPalette(): Palette {
  const styles = getComputedStyle(document.documentElement);
  const light = getTheme() === "light";
  return {
    light,
    bg: parseHexRgb(
      styles.getPropertyValue("--background"),
      light ? [246, 249, 253] : [13, 13, 13],
    ),
    fg: parseHexRgb(
      styles.getPropertyValue("--foreground"),
      light ? [13, 13, 13] : [246, 249, 253],
    ),
    accent: parseHexRgb(styles.getPropertyValue("--accent"), [67, 104, 181]),
  };
}

function mix(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function cellChar(cell: Cell) {
  if (cell.knockout) return " ";
  const idx = Math.min(RAMP_LAST, Math.floor(cell.luma * RAMP_LAST + 0.0001));
  return RAMP[idx];
}

function cellFill(cell: Cell, palette: Palette, hover: boolean, vivid = false) {
  const { r, g, b, luma: t } = cell;
  if (!palette.light) {
    const shade = vivid
      ? hover
        ? 1.14 + t * 0.22
        : 0.78 + t * 0.4
      : hover
        ? 1.08 + t * 0.18
        : DARKEN_SHADOW + t * (DARKEN_HIGHLIGHT - DARKEN_SHADOW);
    return `rgb(${Math.min(255, Math.round(r * shade))} ${Math.min(255, Math.round(g * shade))} ${Math.min(255, Math.round(b * shade))})`;
  }

  const [br, bg, bb] = palette.bg;
  const [ar, ag, ab] = palette.accent;
  const print = hover ? 0.55 + t * 0.38 : 0.38 + t * 0.36;
  let inkR = r * print;
  let inkG = g * print;
  let inkB = b * print;
  if (hover) {
    inkR = mix(inkR, ar, 0.16);
    inkG = mix(inkG, ag, 0.16);
    inkB = mix(inkB, ab, 0.16);
  }
  const paperMix = 0.02 + (1 - t) * 0.1;
  return `rgb(${Math.round(mix(inkR, br, paperMix))} ${Math.round(mix(inkG, bg, paperMix))} ${Math.round(mix(inkB, bb, paperMix))})`;
}

function sampleCells(
  img: HTMLImageElement,
  cols: number,
  rows: number,
  options: {
    cropX: number;
    cropY: number;
    fit: "cover" | "contain";
    knockout: boolean;
  },
): Cell[] {
  const off = document.createElement("canvas");
  off.width = cols;
  off.height = rows;
  const ctx = off.getContext("2d", { willReadFrequently: true });
  if (!ctx) return [];

  ctx.imageSmoothingEnabled = true;
  drawSource(ctx, img, cols, rows, options);
  const data = ctx.getImageData(0, 0, cols, rows).data;
  const cells: Cell[] = new Array(cols * rows);
  const lumas: number[] = new Array(cells.length);
  const keep: number[] = [];

  for (let i = 0; i < cells.length; i++) {
    const o = i * 4;
    const r = data[o];
    const g = data[o + 1];
    const b = data[o + 2];
    const a = data[o + 3];
    const l = luma(r, g, b);
    lumas[i] = l;
    const knockout = options.knockout && (a < 18 || l < 0.07);
    cells[i] = { luma: l, r, g, b, knockout };
    if (!knockout) keep.push(l);
  }

  const sorted = (keep.length ? keep : lumas).slice().sort((a, b) => a - b);
  const lo = percentile(sorted, 0.08);
  const hi = percentile(sorted, 0.94);
  const range = Math.max(0.12, hi - lo);

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].knockout) {
      cells[i].luma = 0;
      continue;
    }
    let t = (lumas[i] - lo) / range;
    t = Math.min(1, Math.max(0, t));
    t = Math.pow(t, 0.72);
    cells[i].luma = t;
  }

  return cells;
}

function monoFamily() {
  const probe = document.createElement("span");
  probe.style.fontFamily =
    "var(--font-geist-mono), ui-monospace, Menlo, Consolas, monospace";
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  document.body.appendChild(probe);
  const family = getComputedStyle(probe).fontFamily;
  probe.remove();
  return family || "ui-monospace, monospace";
}

function paintBase(grid: Grid, palette: Palette = readPalette()) {
  const { cells, cols, rows, cellW, cellH, font, dpr } = grid;
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(cols * cellW));
  canvas.height = Math.max(1, Math.round(rows * cellH));
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  ctx.scale(dpr, dpr);
  ctx.font = font;
  ctx.textBaseline = "top";
  ctx.textAlign = "left";

  const cssCellW = cellW / dpr;
  const cssCellH = cellH / dpr;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const cell = cells[y * cols + x];
      if (!cell || cell.knockout) continue;
      const char = cellChar(cell);
      if (char === " ") continue;
      ctx.fillStyle = cellFill(cell, palette, false, grid.vivid);
      ctx.fillText(char, x * cssCellW, y * cssCellH);
    }
  }

  return canvas;
}

export default function AsciiCity({
  src = SOURCE,
  cropX = 0.62,
  cropY = 0.12,
  fit = "cover",
  knockout = false,
  revealOnView = false,
  className = "h-full w-full",
}: AsciiCityProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const baseRef = useRef<HTMLCanvasElement | null>(null);
  const gridRef = useRef<Grid | null>(null);
  const introRef = useRef(1);
  const rafRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });
  const paletteRef = useRef<Palette | null>(null);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
    radius: 0,
    targetRadius: 0,
  });

  const renderFrame = useCallback((time = 0) => {
    const canvas = canvasRef.current;
    const base = baseRef.current;
    const grid = gridRef.current;
    if (!canvas || !base || !grid) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w, h, dpr } = sizeRef.current;
    const intro = introRef.current;
    const pointer = pointerRef.current;

    pointer.x += (pointer.tx - pointer.x) * 0.34;
    pointer.y += (pointer.ty - pointer.y) * 0.34;
    pointer.radius += (pointer.targetRadius - pointer.radius) * 0.28;

    ctx.clearRect(0, 0, w, h);
    const revealRows = Math.ceil(grid.rows * Math.min(1, intro * 1.08));
    const revealH = Math.min(h, revealRows * grid.cellH + 1);

    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, w, revealH);
    ctx.clip();
    ctx.globalAlpha = Math.min(1, intro * 1.4);
    ctx.drawImage(base, 0, 0);

    const palette = paletteRef.current;
    if (pointer.radius > 0.6 && palette) {
      const cssCellW = grid.cellW / dpr;
      const cssCellH = grid.cellH / dpr;
      const radius = pointer.radius * dpr;
      const t = time / 1000;

      const colStart = Math.max(
        0,
        Math.floor((pointer.x - radius * 1.35) / grid.cellW),
      );
      const colEnd = Math.min(
        grid.cols - 1,
        Math.ceil((pointer.x + radius * 1.35) / grid.cellW),
      );
      const rowStart = Math.max(
        0,
        Math.floor((pointer.y - radius * 1.35) / grid.cellH),
      );
      const rowEnd = Math.min(
        grid.rows - 1,
        Math.ceil((pointer.y + radius * 1.35) / grid.cellH),
      );

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.font = grid.font;
      ctx.textBaseline = "top";
      ctx.textAlign = "left";
      ctx.globalAlpha = 1;

      for (let row = rowStart; row <= rowEnd; row++) {
        for (let col = colStart; col <= colEnd; col++) {
          const cell = grid.cells[row * grid.cols + col];
          if (!cell || cell.knockout) continue;
          const char = cellChar(cell);
          if (char === " ") continue;

          const cx = (col + 0.5) * grid.cellW;
          const cy = (row + 0.5) * grid.cellH;
          const dist = Math.hypot(cx - pointer.x, cy - pointer.y);
          const n = hash2(col, row);
          const pulse = 0.5 + 0.5 * Math.sin(t * 2.4 + n * 6.28318);
          const localRadius = radius * (0.62 + n * 0.48 + pulse * 0.1);

          if (dist > localRadius) continue;

          ctx.fillStyle = cellFill(cell, palette, true, grid.vivid);
          ctx.fillText(char, col * cssCellW, row * cssCellH);
        }
      }
      ctx.restore();
    }

    ctx.restore();

    const moving =
      intro < 1 ||
      pointer.radius > 0.5 ||
      Math.abs(pointer.targetRadius - pointer.radius) > 0.15 ||
      Math.abs(pointer.tx - pointer.x) > 0.15 ||
      Math.abs(pointer.ty - pointer.y) > 0.15;

    if (moving) {
      rafRef.current = requestAnimationFrame(renderFrame);
    }
  }, []);

  const build = useCallback(
    async (img: HTMLImageElement) => {
      const wrap = wrapRef.current;
      const canvas = canvasRef.current;
      if (!wrap || !canvas) return;

      const cssW = wrap.clientWidth;
      const cssH = wrap.clientHeight;
      if (cssW < 8 || cssH < 8) return;

      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const width = Math.round(cssW * dpr);
      const height = Math.round(cssH * dpr);
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      sizeRef.current = { w: width, h: height, dpr };

      const cols = Math.round(Math.min(180, Math.max(80, cssW / 5.1)));
      const cellW = width / cols;
      const fontSize = Math.max(7, (cellW / dpr) * 1.24);
      const cellH = fontSize * dpr * 0.88;
      const rows = Math.max(28, Math.floor(height / cellH));
      const family = monoFamily();

      const grid: Grid = {
        cells: sampleCells(img, cols, rows, { cropX, cropY, fit, knockout }),
        cols,
        rows,
        cellW,
        cellH,
        font: `${fontSize}px ${family}`,
        dpr,
        vivid: knockout,
      };
      gridRef.current = grid;
      paletteRef.current = readPalette();
      baseRef.current = paintBase(grid, paletteRef.current);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(renderFrame);
    },
    [cropX, cropY, fit, knockout, renderFrame],
  );

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let cancelled = false;
    let img: HTMLImageElement | null = null;
    let running = false;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let started = false;
    introRef.current = revealOnView ? 0 : 1;
    const playIntro = () => {
      if (started || cancelled) return;
      started = true;
      if (reduced) {
        introRef.current = 1;
        renderFrame();
        return;
      }
      introRef.current = 0;
      const start = performance.now();
      const intro = (now: number) => {
        if (cancelled) return;
        const t = Math.min(1, (now - start) / 1100);
        introRef.current = 1 - Math.pow(1 - t, 3);
        renderFrame();
        if (t < 1) requestAnimationFrame(intro);
      };
      requestAnimationFrame(intro);
    };

    const setup = async () => {
      img = await loadImage(src);
      if (cancelled) return;
      await build(img);
      if (cancelled) return;
      if (!revealOnView) {
        playIntro();
        return;
      }
      const rect = wrap.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) playIntro();
    };

    void setup();

    let io: IntersectionObserver | null = null;
    if (revealOnView) {
      io = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;
          playIntro();
          io?.disconnect();
        },
        { threshold: 0.02 },
      );
      io.observe(wrap);
    }

    const ro = new ResizeObserver(() => {
      if (!img || running) return;
      running = true;
      requestAnimationFrame(() => {
        running = false;
        if (cancelled || !img) return;
        void build(img);
      });
    });
    ro.observe(wrap);

    const onThemeChange = () => {
      const grid = gridRef.current;
      if (!grid) return;
      paletteRef.current = readPalette();
      baseRef.current = paintBase(grid, paletteRef.current);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(renderFrame);
    };
    window.addEventListener("themechange", onThemeChange);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io?.disconnect();
      window.removeEventListener("themechange", onThemeChange);
    };
  }, [build, renderFrame, revealOnView, src]);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const dpr = sizeRef.current.dpr;
    pointerRef.current.tx = (event.clientX - rect.left) * dpr;
    pointerRef.current.ty = (event.clientY - rect.top) * dpr;
    pointerRef.current.targetRadius = BLOB_RADIUS;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(renderFrame);
  };

  const onPointerLeave = () => {
    pointerRef.current.targetRadius = 0;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(renderFrame);
  };

  return (
    <div
      ref={wrapRef}
      className={className}
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <canvas ref={canvasRef} className="ascii-canvas block h-full w-full" />
    </div>
  );
}
