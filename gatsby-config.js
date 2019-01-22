module.exports = {
  siteMetadata: {
      title: `Learning Wars - Blog For Passionate Learners`,
      description: `Teach what you learn, Learn what you teach. Visit our website to read about what the writers are learning!`,
      author: `@huiyeonkim`,
      siteUrl: `https://learningwars.com`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output:`/my-sitemap.xml`
            }
        },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
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
          `Thasadith`, // you can also specify font weights and styles
          `Crete Round`,
          `Open Sans`
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

    {
        resolve:'gatsby-transformer-remark',
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                      maxWidth: 850,
                    },
                },
                {
                    resolve: `gatsby-remark-responsive-iframe`,
                    options: {
                      wrapperStyle: `margin-bottom: 1.0725rem`,
                    },
                },
                'gatsby-remark-prismjs',
                'gatsby-remark-copy-linked-files',
                'gatsby-remark-smartypants',
            ]
        }
    },
   
    `gatsby-remark-copy-linked-files`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-132877953-1",
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          sampleRate: 5,
          siteSpeedSampleRate: 10
        },
    },
  ],
}
