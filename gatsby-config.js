module.exports = {
  siteMetadata: {
    title: `Cura Fitness`,
    author: `Alan Hylands`,
    description: `Cura Fitness is a boutique female only fitness studio in Banbridge, County Down, Northern Ireland.`,
    siteUrl: `https://curafitness.com/`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //     name: `pages`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-111330484-1`,
      },
    },
    // `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Cura Fitness`,
    //     short_name: `Cura Fitness`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#939393`,
    //     display: `minimal-ui`,
    //     icon: `content/assets/favicon.png`,
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
