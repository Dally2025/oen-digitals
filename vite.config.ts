import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const vitePrerender = require("vite-plugin-prerender");

const rawPort = process.env.PORT ?? "5000";
const parsedPort = Number(rawPort);
const port = Number.isNaN(parsedPort) || parsedPort <= 0 ? 5000 : parsedPort;

const basePath = process.env.BASE_PATH ?? "/";
const outputDir = path.resolve(import.meta.dirname, "dist/public");
const prerenderRoutes = [
  "/",
  "/how-it-works",
  "/pricing",
  "/website-design-pembrokeshire",
  "/privacy-policy",
  "/cookie",
  "/terms-and-conditions",
  "/complaints",
  "/complaints-procedure",
];

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    vitePrerender({
      staticDir: outputDir,
      routes: prerenderRoutes,
    }),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: outputDir,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("react") || id.includes("wouter")) return "react";
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("@tanstack/react-query")) return "query";
        },
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
