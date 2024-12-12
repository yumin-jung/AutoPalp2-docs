import React from "react";
import { DocsThemeConfig, useConfig, useTheme } from "nextra-theme-docs";
import Script from 'next/script'
import { motion } from 'framer-motion'
import { useRouter } from 'nextra/hooks'

const SVG = () => {
  const { theme, systemTheme } = useTheme();
  const dark = theme === "system" ? systemTheme === "dark" : theme === "dark";

  return (
    <svg
      width="50%"
      height="50%"
      viewBox="0 0 741 115"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g>
          <path
            d="M113.8,49.4C111.2,45.2 107.7,42 103.3,39.6C98.9,37.3 94,36.1 88.5,36.1C83.2,36.1 78.2,37.3 73.8,39.6C69.6,41.8 66.2,44.8 63.4,48.7C60.9,44.8 57.7,41.7 53.6,39.6C49.3,37.3 44.5,36.1 39.1,36.1C33.7,36.1 28.9,37.3 24.6,39.6C21.8,41.1 19.4,43.1 17.4,45.4L17.4,37.7L0,37.7L0,113.2L17.3,113.2L17.3,68.2C17.3,64.8 18,62 19.5,59.6C21,57.2 22.9,55.4 25.4,54.2C27.9,52.9 30.7,52.3 33.8,52.3C38.4,52.3 42.3,53.7 45.4,56.5C48.5,59.3 50.1,63.2 50.1,68.2L50.1,113.2L67.4,113.2L67.4,68.2C67.4,64.8 68.1,62 69.6,59.6C71.1,57.2 73.1,55.4 75.6,54.2C78.1,52.9 80.9,52.3 83.9,52.3C88.5,52.3 92.4,53.7 95.5,56.5C98.6,59.3 100.2,63.2 100.2,68.2L100.2,113.2L117.5,113.2L117.5,64.5C117.7,58.6 116.4,53.6 113.8,49.4Z"
            fill={dark ? "white" : "black"}
          />
          <path
            d="M190.2,37.8L190.2,46.2C188,43.7 185.4,41.6 182.4,39.9C177.9,37.4 172.8,36.2 167.1,36.2C160.3,36.2 154.1,38 148.6,41.5C143.1,45 138.7,49.7 135.5,55.7C132.3,61.6 130.7,68.3 130.7,75.8C130.7,83.1 132.3,89.8 135.5,95.7C138.7,101.6 143.1,106.3 148.6,109.8C154.1,113.3 160.3,115 167.1,115C172.9,115 178,113.8 182.5,111.3C185.5,109.7 188.1,107.6 190.2,105.1L190.2,113.4L207.5,113.4L207.5,37.8L190.2,37.8ZM185.4,92C181.5,96.3 176.3,98.5 169.9,98.5C165.7,98.5 162,97.5 158.8,95.6C155.6,93.7 153.1,91 151.2,87.5C149.4,84 148.4,80.1 148.4,75.5C148.4,71 149.3,67 151.2,63.5C153,60 155.6,57.3 158.8,55.4C162,53.5 165.7,52.5 169.9,52.5C174.2,52.5 177.9,53.5 181.1,55.4C184.3,57.3 186.8,60 188.6,63.5C190.4,67 191.3,70.9 191.3,75.5C191.3,82.2 189.4,87.7 185.4,92Z"
            fill={dark ? "white" : "black"}
          />
          <path
            d="M296.7,113.3L263.4,74L295.2,37.8L274.6,37.8L244,73.3L244,0L226.7,0L226.7,113.3L244,113.3L244,76.3L274.7,113.3L296.7,113.3Z"
            fill={dark ? "white" : "black"}
          />
          <path
            d="M368.9,54.4C365.8,48.7 361.6,44.3 356.2,41C350.8,37.7 344.6,36.1 337.6,36.1C330.4,36.1 323.8,37.8 317.9,41.3C312,44.8 307.3,49.5 303.8,55.4C300.3,61.3 298.6,68 298.6,75.5C298.6,82.9 300.4,89.7 303.9,95.6C307.4,101.6 312.2,106.3 318.2,109.7C324.2,113.1 331,114.8 338.6,114.8C344.5,114.8 350,113.7 355.3,111.5C360.5,109.3 365,106 368.7,101.7L357.7,90.5C355.4,93.1 352.6,95.1 349.3,96.5C346,97.9 342.4,98.5 338.5,98.5C334,98.5 330,97.5 326.5,95.6C323,93.7 320.4,90.9 318.5,87.3C317.6,85.6 316.9,83.8 316.4,81.8L372.7,81.8C373,80.2 373.3,78.8 373.4,77.5C373.6,76.2 373.6,74.9 373.6,73.6C373.5,66.6 372,60.1 368.9,54.4ZM318.1,62.9C319.9,59.5 322.4,56.8 325.7,55C329,53.1 332.8,52.2 337.2,52.2C341.4,52.2 344.9,53 347.8,54.7C350.7,56.4 352.9,58.8 354.5,61.9C355.4,63.7 356,65.7 356.5,67.9L316.3,67.9C316.7,66 317.4,64.4 318.1,62.9Z"
            fill={dark ? "white" : "black"}
          />
      </g>
      <path
        d="M430.5,66.2C427.1,66.2 424.4,65.1 422.2,62.8C420,60.5 419,57.8 419,54.5C419,51.1 420.1,48.4 422.2,46.2C424.3,44 427.1,42.9 430.5,42.9C433.9,42.9 436.6,44 438.8,46.2C440.9,48.4 442,51.2 442,54.5C442,57.8 440.9,60.5 438.8,62.8C436.6,65.1 433.8,66.2 430.5,66.2ZM430.5,114.9C427.1,114.9 424.4,113.8 422.2,111.5C420,109.2 419,106.5 419,103.2C419,99.8 420.1,97.1 422.2,94.9C424.3,92.7 427.1,91.6 430.5,91.6C433.9,91.6 436.6,92.7 438.8,94.9C440.9,97.1 442,99.9 442,103.2C442,106.5 440.9,109.2 438.8,111.5C436.6,113.7 433.8,114.9 430.5,114.9Z"
        style={{ fill: "rgb(255,0,140)"}}
      />
      <path
        d="M473.1,66.2C469.7,66.2 467,65.1 464.8,62.8C462.6,60.5 461.6,57.8 461.6,54.5C461.6,51.1 462.7,48.4 464.8,46.2C466.9,44 469.7,42.9 473.1,42.9C476.5,42.9 479.2,44 481.4,46.2C483.5,48.4 484.6,51.2 484.6,54.5C484.6,57.8 483.5,60.5 481.4,62.8C479.2,65.1 476.5,66.2 473.1,66.2ZM473.1,114.9C469.7,114.9 467,113.8 464.8,111.5C462.6,109.2 461.6,106.5 461.6,103.2C461.6,99.8 462.7,97.1 464.8,94.9C466.9,92.7 469.7,91.6 473.1,91.6C476.5,91.6 479.2,92.7 481.4,94.9C483.5,97.1 484.6,99.9 484.6,103.2C484.6,106.5 483.5,109.2 481.4,111.5C479.2,113.7 476.5,114.9 473.1,114.9Z"
        style={{ fill: "rgb(255,0,140)"}}
      />
      <g>
        <rect
          x="535.6"
          y="0"
          width="17.3"
          height="113.3"
          fill={dark ? "white" : "black"}
        />
        <path
          d="M626.9,37.8L626.9,46.2C624.7,43.7 622.1,41.6 619.1,39.9C614.6,37.4 609.5,36.2 603.8,36.2C597,36.2 590.8,38 585.3,41.5C579.8,45 575.4,49.7 572.2,55.7C569,61.6 567.4,68.3 567.4,75.8C567.4,83.1 569,89.8 572.2,95.7C575.4,101.6 579.8,106.3 585.3,109.8C590.8,113.3 597,115 603.8,115C609.6,115 614.7,113.8 619.2,111.3C622.2,109.7 624.8,107.6 626.9,105.1L626.9,113.4L644.2,113.4L644.2,37.8L626.9,37.8ZM622.1,92C618.2,96.3 613,98.5 606.6,98.5C602.4,98.5 598.7,97.5 595.5,95.6C592.3,93.7 589.8,91 587.9,87.5C586.1,84 585.1,80.1 585.1,75.5C585.1,71 586,67 587.9,63.5C589.7,60 592.3,57.3 595.5,55.4C598.7,53.5 602.4,52.5 606.6,52.5C610.9,52.5 614.6,53.5 617.8,55.4C621,57.3 623.5,60 625.3,63.5C627.1,67 628,70.9 628,75.5C628,82.2 626,87.7 622.1,92Z"
          fill={dark ? "white" : "black"}
        />
        <path
          d="M735.3,55.6C732.1,49.7 727.7,45 722.2,41.4C716.7,37.9 710.5,36.1 703.7,36.1C698,36.1 692.9,37.3 688.4,39.8C685.3,41.5 682.7,43.6 680.5,46.1L680.5,0L663.2,0L663.2,113.3L680.5,113.3L680.5,105C682.6,107.5 685.2,109.5 688.2,111.2C692.7,113.7 697.8,114.9 703.6,114.9C710.4,114.9 716.6,113.2 722.1,109.7C727.6,106.2 732,101.5 735.2,95.6C738.4,89.7 740,83 740,75.7C740.1,68.2 738.5,61.5 735.3,55.6ZM719.6,87.5C717.8,91 715.2,93.7 712,95.6C708.8,97.5 705.1,98.5 700.9,98.5C696.7,98.5 693,97.5 689.7,95.6C686.4,93.7 683.9,91 682.1,87.5C680.3,84 679.4,80.1 679.4,75.5C679.4,71 680.3,67 682.1,63.5C683.9,60 686.4,57.3 689.7,55.4C692.9,53.5 696.7,52.5 700.9,52.5C705.1,52.5 708.8,53.5 712,55.4C715.2,57.3 717.7,60 719.6,63.5C721.4,67 722.4,70.9 722.4,75.5C722.4,80 721.4,84 719.6,87.5Z"
          fill={dark ? "white" : "black"}
        />
      </g>
    </svg>
  );
};

const SEED_SCALE_COLOR_SCRIPT = `(()=>{var e=document.documentElement,d=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{e.dataset.seed="",e.dataset.seedScaleColor=d.matches?"dark":"light"};"addEventListener"in d?d.addEventListener("change",a):"addListener"in d&&d.addListener(a),a()})();`;
const NEXTRA_THEME_SCRIPT = `(()=>{var e=document.documentElement,d=window.matchMedia("(prefers-color-scheme: dark)"),s=()=>{e.classList.remove("light"),e.classList.remove("dark"),d.matches?e.classList.add("dark"):e.classList.add("light")};"addEventListener"in d?d.addEventListener("change",s):"addListener"in d&&d.addListener(s),s()})();`;

const config: DocsThemeConfig = {
  logo: function Logo() {
    return (
      <motion.div
        className="flex items-center gap-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span>
          {/* <Image
            src="/img/logo_dark.png"
            width={34}
            height={34}
            alt="suspensive logo"
          /> */}
        </motion.span>
        <div className="relative">
          <strong>AutoPalp</strong>
          <span className="absolute text-[8px]">v2</span>
        </div>
      </motion.div>
    )
  },
  darkMode: false,
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
        <Script dangerouslySetInnerHTML={{ __html: SEED_SCALE_COLOR_SCRIPT }} />
        <Script dangerouslySetInnerHTML={{ __html: NEXTRA_THEME_SCRIPT }} />
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
