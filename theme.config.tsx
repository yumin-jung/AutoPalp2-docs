import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  faviconGlyph: "✦",
  head: (
    <>
      <title>AutoPalp Docs</title>
    </>
  ),
  logo: <span>AutoPalp</span>,
  project: {
    link: "https://github.com/yumin-jung/AutoPalp2-docs",
  },
  docsRepositoryBase: "https://github.com/yumin-jung/AutoPalp2-docs",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
