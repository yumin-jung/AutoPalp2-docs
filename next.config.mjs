import nextra from 'nextra'

const withNextra = nextra({
  autoImportThemeStyle: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  search: {
    codeblocks: true,
  },
  codeHighlight: true,
  readingTime: true,
})

/**
 * @type {import('next').NextConfig}
 */
export default withNextra({
  reactStrictMode: true,
})
