import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { motion } from 'framer-motion'
import { useRouter } from 'nextra/hooks'

const config: DocsThemeConfig = {
  logo: function Logo() {
    return (
      <motion.div
        className="flex items-center gap-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <strong>AutoPalp</strong>
          <span className="absolute text-[8px]">v2</span>
        </div>
      </motion.div>
    )
  },
  darkMode: true,
  project: {
    link: "https://github.com/yumin-jung/AutoPalp2-docs",
  },
  docsRepositoryBase: "https://github.com/yumin-jung/AutoPalp2-docs",
  useNextSeoProps() {
    return {
      titleTemplate: "%s - AutoPalp",
      openGraph: {
        type: "website",
        url: "https://autopalp.vercel.app",
        title: "AutoPalp",
        siteName: "AutoPalp",
        images: [
          {
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: "AutoPalp",
          },
        ],
      },
    };
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  search: {
    placeholder: "Search",
  },
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
  head: () => {
    const { frontMatter } = useConfig();

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Data Collection Enabled Algometer."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://autopalp.vercel.app" />
        <meta name="og:title" content={frontMatter.title || "AutoPalp"} />
        <meta
          name="og:description"
          content="Data Collection Enabled Algometer."
        />
        <meta name="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
      </>
    );
  },
  main: ({ children }) => {
    const router = useRouter()

    return (
      <motion.div
        key={router.asPath}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {children}
      </motion.div>
    )
  }
};

export default config;
