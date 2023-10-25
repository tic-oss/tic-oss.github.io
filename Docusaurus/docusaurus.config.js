module.exports = {
  title: 'Technology Innovation Center - CoMakeIT',
  tagline: 'Documentation for CoMakeIT TIC',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'coMakeIT-TIC',
  projectName: 'coMakeIT-TIC.github.io',

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/coMakeIT-TIC/coMakeIT-TIC.github.io/edit/main/',
        },
        // blog: {
        //   blogTitle: 'Blog',
        //   blogDescription:
        //     'The TIC blog is where our team shares our thoughts and ideas about everything from our products to industry news and insights.',
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: 'all',
        //    // copyright,
        //   },

        //   blogSidebarTitle: 'Recent posts',
        //   blogSidebarCount: 5,
        //   postsPerPage: 'ALL',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img',
    video: 'videos',
    customFields:{
      mendableAnonKey:"ea127331-5f53-4643-a5ec-c964a6c87aba",
  },
    navbar: {
      title: 'TIC@CoMakeIT',
      logo: {
        alt: 'TIC@CoMakeIT Logo',
        src: 'img/logo.png',
      },   
      items: [
        // {
        //   to: 'docs/index',
        //   activeBasePath: 'docs/index',
        //   label: 'Introduction',
        //   position: 'left',
        // },
        {
          type: 'doc',
          docId: 'DevelopersGuide/Concept',
          position: 'left',
          label: "Developer's Guide",
        },
        {
          type: 'doc',
          docId: 'Documentation/concept',
          position: 'left',
          label: 'Documentation',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/coMakeIT-TIC/coMakeIT-TIC.github.io',
          //label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: "Developer's Guide",
              to: 'docs/DevelopersGuide/Concept',
            },
            {
              label: 'Architecture',
              to: 'docs/documentation/concept',
            },
            {
              label: 'Local Setup',
              to: 'docs/documentation/localsetup',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/coMakeIT-TIC/coMakeIT-TIC.github.io',
            },
            {
              label: 'Contact Us',
              href: 'https://github.com/orgs/tic-oss/discussions',
            },
          ],
        },
      ],
    },
  },
};
