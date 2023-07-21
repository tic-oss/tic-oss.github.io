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

  plugins: [
    // ... other plugins

    // Add the local search plugin
    [
      'docusaurus-lunr-search',
      {
        // The languages for which you want to enable the search
        languages: ['en'], // Example: English

        // The search result page URL. The value should match the URL in your docs folder.
        // This is the page where the search results will be displayed.
        searchResultPagePath: '/search',

        // Whether to generate an index file for each version or a single one
        // Set this to true if you have multiple versions of docs deployed.
        // generateSearchIndicesForLanguages: true, // Uncomment this line if needed
      },
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
        blog: {
          showReadingTime: true,
          // editUrl: 'https://github.com/coMakeIT-TIC/coMakeIT-TIC.github.io/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
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
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/coMakeIT-TIC/coMakeIT-TIC.github.io',
          label: 'GitHub',
          position: 'right',
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
            {
              label: 'Blog',
              to: '/blog',
            },
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
