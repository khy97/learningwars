module.exports = {
  siteMetadata: {
    title: `Learning Wars`,
    description: `Teach what you learn, Learn what you teach. Visit our website to read about what the writers are learning!`,
    author: `@huiyeonkim`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `Raleway`,
          `Thasadith` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "LearningWars",
        short_name: "LearningWars",
        start_url: "/",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },

    'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
