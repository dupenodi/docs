const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "LOOPX Documentation",
  tagline: "Launch Faster, Build Cheaper, Serve customers better",
  url: "https://loopx-docs-netlify.app",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nitiai", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          // path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],


  themeConfig: {
    colorMode: {
      disableSwitch: true,
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "",
      logo: {
        alt: "LOOPX Logo",
        src: "https://loop-niti-assets.s3.ap-south-1.amazonaws.com/loopx-docs/loopX.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://x.com",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com",
            },
            {
              label: "Facebook",
              href: "https://facebook.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Niti AI, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
   // Add custom fields here
   customFields: {
    domain: "https://demo.niti.ai/docs",
    // domain: "http://localhost:3001"
  },
};
