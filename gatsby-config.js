module.exports = {
  siteMetadata: {
    title: `Xing Lie Cargo | Jasa Forwarder dari China | Cargo Import Door to Door`,
    description: `Jasa ekspedisi forwarder import borongan door to door service dari China, Korea, Singapore, Thailand, Taiwan, dll ke Indonesia by sea and air`,
    author: `Cynthia Tjoe`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Service",
        link: "/service",
      },
      {
        name: "Contact",
        link: "/contact",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src/styles"],
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
