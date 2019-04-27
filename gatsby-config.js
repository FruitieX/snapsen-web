module.exports = {
  siteMetadata: {
    title: `Snapsen`,
    description: `Snapsen songbook`,
    author: `FruitieX`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`,
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
        name: `Snapsen`,
        short_name: `Snapsen`,
        start_url: `/`,
        background_color: `#795548`,
        theme_color: `#795548`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // 'gatsby-plugin-styled-components',
    `gatsby-plugin-offline`,
  ],
}
