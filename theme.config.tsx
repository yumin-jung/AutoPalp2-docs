import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  faviconGlyph: "✦",
  head: (
    <>
      <title>AutoPalp</title>
    </>
  ),
  logo: <span>AutoPalp</span>,
  project: {
    link: "https://github.com/yumin-jung/AutoPalp2-docs",
  },
  docsRepositoryBase: "https://github.com/yumin-jung/AutoPalp2-docs",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://make.kaist.ac.kr/" target="_blank">
          KAIST Make Lab
        </a>
        .
      </span>
    ),
  },
};

export default config;
