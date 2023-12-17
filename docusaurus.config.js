// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SantaSpeen',
  tagline: 'Personal Blog',
  favicon: 'img/favicon.ico',
  url: 'https://santaspeen.ru',
  baseUrl: '/',
  organizationName: 'santaspeen',
  projectName: 'santaspeen.ru',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/SantaSpeen/santaspeen.ru-blog/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
          editUrl: 'https://github.com/SantaSpeen/santaspeen.ru-blog/tree/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        // gtag: {
        //   trackingID: process.env.GOOGLE_ANALYTICS_TAG_ID,
        //   anonymizeIP: true,
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      navbar: {
        title: 'SantaSpeen',
        logo: {
          alt: 'SantaSpeen',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docs',
          },
          { to: "/about", label: "About", position: "right" },
          {
            href: "https://github.com/SantaSpeen",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub",
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} SantaSpeen`,
      },
      // algolia: {
      //   appId: process.env.ALGOLIA_APP_ID,
      //   apiKey: process.env.ALGOLIA_API_KEY,
      //   indexName: process.env.ALGOLIA_INDEX_NAME,
      //   searchParameters: {},
      // },
      prism: {
        additionalLanguages: ['bash', 'diff', 'json'],
        darkTheme: darkTheme,
        lightTheme: lightTheme
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
  plugins: [
    [
      'docusaurus-plugin-sass',
      /** @type {import('docusaurus-plugin-sass').Options} */
      {}
    ],
  ]
};

module.exports = config;
