/**
 * Custom prerender script using Puppeteer + a local static server.
 * Runs after `vite build` to snapshot each route into a static HTML file.
 */
import { createServer } from "net";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, "dist/public");
const PORT = 4173;

const ROUTES = [
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

async function freePort(port) {
  return new Promise((resolve) => {
    const server = createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => { server.close(() => resolve(true)); });
    server.listen(port);
  });
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

}
async function main() {
async function waitForServer(url, maxRetries = 20) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(url, { timeout: 5000 });
      if (res.ok) return true;
    } catch (_) {}
    await sleep(500);
  }
  return false;
  // Check dist dir exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`[prerender] ${DIST_DIR} does not exist. Run 'npm run build:vite' first.`);
    process.exit(1);
  }

  // Check port is free
  const portFree = await freePort(PORT);
  if (!portFree) {
    console.error(`[prerender] Port ${PORT} is in use. Aborting.`);
    process.exit(1);
  }

  // Start static server
  console.log(`[prerender] Starting static server on port ${PORT}…`);
  const serveArgs = [
    path.join(__dirname, "node_modules/.bin/serve"),
    "-l", String(PORT),
    "--no-clipboard",
    "--single",  // SPA mode: serve index.html for all paths
    DIST_DIR,
  ];
  const server = spawn("node", serveArgs, { stdio: "ignore" });
  await sleep(2000); // give server time to start

  const serve = spawn("npx", [
    "serve",
    "-l", String(PORT),
    "--no-clipboard",
    "--single",
    DIST_DIR,
  ], { stdio: ["ignore", "ignore", "ignore"] });
  
  // Wait for server to be ready
  const serverReady = await waitForServer(`http://localhost:${PORT}/`);
  if (!serverReady) {
    console.error(`[prerender] Server failed to start on port ${PORT}`);
    serve.kill();
    process.exit(1);
  }

  console.log(`[prerender] Server is ready.`);
  const puppeteer = await import(
    path.join(__dirname, "node_modules/puppeteer/lib/cjs/puppeteer/node.js")
  ).catch(() => import(
    /**
     * SSR prerender script.
     * Uses Vite's SSR loader and ReactDOMServer to generate static HTML for each route,
     * avoiding any browser dependency on the build machine.
     */
    import fs from "fs";
    import path from "path";
    import { fileURLToPath } from "url";
    import React from "react";
    import { renderToString } from "react-dom/server";
    import { createServer as createViteServer } from "vite";

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const DIST_DIR = path.join(__dirname, "dist/public");
    const TEMPLATE_FILE = path.join(DIST_DIR, "index.html");

    const ROUTES = [
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

    const META = {
      "/": {
        title: "Web Design & Digital Support in Wales | OEN Digitals",
        description:
          "Web design, booking systems, and digital literacy coaching for small businesses in Pembrokeshire and Wales. Build simple, effective websites and tools with confidence.",
      },
      "/how-it-works": {
        title: "How It Works | Oen Digitals – Web Design Pembrokeshire",
        description:
          "From first conversation to handover, see exactly how Oen Digitals works with businesses in Pembrokeshire and Wales to build practical websites.",
      },
      "/pricing": {
        title: "Pricing | Oen Digitals – Web Design Pembrokeshire",
        description:
          "Transparent website design and AI workflow consulting pricing for small businesses in Pembrokeshire and Wales. DIY lessons from £150 with clear quotes and no hidden costs.",
      },
      "/website-design-pembrokeshire": {
        title: "Website Design Pembrokeshire | Oen Digitals",
        description:
          "Website design and digital support for small businesses in Pembrokeshire and Wales. Oen Digitals creates clear, modern websites with forms, SEO basics, branding support and practical AI tools.",
      },
      "/privacy-policy": {
        title: "Privacy Policy | Oen Digitals",
        description:
          "How Oen Digitals collects, uses and protects personal data when you use the website or contact the business.",
      },
      "/cookie": {
        title: "Cookie Policy | Oen Digitals",
        description:
          "Read how cookies are used on the Oen Digitals website and how you can manage your cookie preferences.",
      },
      "/terms-and-conditions": {
        title: "Terms & Conditions | Oen Digitals",
        description:
          "Terms and conditions covering Oen Digitals services, payments, delivery and client responsibilities.",
      },
      "/complaints": {
        title: "Complaints Procedure | Oen Digitals",
        description:
          "How to raise a complaint and what happens when Oen Digitals receives a service issue or concern.",
      },
      "/complaints-procedure": {
        title: "Complaints Procedure | Oen Digitals",
        description:
          "How to raise a complaint and what happens when Oen Digitals receives a service issue or concern.",
      },
    };

    function escapeHtml(value) {
      return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function injectPageMeta(html, title, description) {
      let output = html.replace(
        /<title>.*?<\/title>/s,
        `<title>${escapeHtml(title)}</title>`,
      );

      if (output.includes('name="description"')) {
        output = output.replace(
          /<meta name="description" content="[^"]*"\s*\/>/,
          `<meta name="description" content="${escapeHtml(description)}" />`,
        );
      } else {
        output = output.replace(
          /<meta charset="UTF-8"\s*\/>/,
          `$&\n    <meta name="description" content="${escapeHtml(description)}" />`,
        );
      }

      return output;
    }

    async function main() {
      if (!fs.existsSync(DIST_DIR)) {
        console.error(`[prerender] ${DIST_DIR} does not exist. Run the Vite build first.`);
        process.exit(1);
      }

      const template = fs.readFileSync(TEMPLATE_FILE, "utf8");

      const vite = await createViteServer({
        root: __dirname,
        appType: "custom",
        server: {
          middlewareMode: true,
        },
      });

      try {
        const appModule = await vite.ssrLoadModule("/src/App.tsx");
        const App = appModule.default;

        for (const route of ROUTES) {
          const meta = META[route] ?? META["/"];
          const appHtml = renderToString(
            React.createElement(App, { ssrPath: route, ssrSearch: "" }),
          );

          const pageHtml = template
            .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
            .replace('<div id="root"></div>\n', `<div id="root">${appHtml}</div>\n`);

          const finalHtml = injectPageMeta(pageHtml, meta.title, meta.description);

          const outDir = route === "/" ? DIST_DIR : path.join(DIST_DIR, route);
          fs.mkdirSync(outDir, { recursive: true });
          fs.writeFileSync(path.join(outDir, "index.html"), finalHtml, "utf8");
          console.log(`[prerender] Rendered ${route} (${finalHtml.length} bytes)`);
        }

        console.log("[prerender] All routes rendered successfully!");
      } finally {
        await vite.close();
      }
    }

    main().catch((err) => {
      console.error("[prerender] Fatal error:", err);
      process.exit(1);
    });
