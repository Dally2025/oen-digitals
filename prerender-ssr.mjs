/**
 * SSR prerender script.
 * Uses Vite's SSR loader and ReactDOMServer to generate static HTML for each route,
 * avoiding any browser dependency on the build machine.
 */
import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";
import { Router as WouterRouter } from "wouter";

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
        React.createElement(
          WouterRouter,
          { ssrPath: route, ssrSearch: "" },
          React.createElement(App, { ssrPath: route, ssrSearch: "" }),
        ),
      );

      const pageHtml = template.replace(
        /<div id="root"><\/div>/,
        `<div id="root">${appHtml}</div>`,
      );

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
