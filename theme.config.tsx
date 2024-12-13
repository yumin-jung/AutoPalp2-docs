import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { motion } from 'motion/react'
import { useRouter } from 'nextra/hooks'

const config: DocsThemeConfig = {
  logo: () => {
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
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  search: {
    placeholder: "Search",
  },
  footer: {
    content: (
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
    const config = useConfig<{ description?: string }>()
    const { asPath } = useRouter()
    const url = `https://autopalp.vercel.app${asPath}`
    const title =
      config.title !== 'Index' ? `${config.title} - AutoPalp` : 'AutoPalp'
    const description =
      config.frontMatter.description ?? 'Data Collection Enabled Algometer'

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* HTML Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title || 'AutoPalp'} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="autopalp.vercel.app" />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title || 'AutoPalp'} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/og-image.png" />
        <meta property="og:site_name" content="AutoPalp" />
        
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
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
