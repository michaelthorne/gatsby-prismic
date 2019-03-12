require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `prismic.io and GatsbyJS`,
    description: `Experiment using prismic.io and GatsbyJS`,
    author: `@mikkelz_za`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `michael-thorne`,
        accessToken: `${process.env.API_KEY}`,
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-preview',
      options: {
        repositoryName: 'gatsby-source-prismic-test-site',
        linkResolver (doc) {
          return `${doc.tag}`
        },
        path: '/preview',
      },
    },
  ],
}
