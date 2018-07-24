module.exports = {
  proxy: {
    prefix: '/api',
    url: process.env.API_URL || 'http://localhost:3000', // development
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/items`,
      name: "items",
    },
  },
  {
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/src/pages`,
    name: "pages",
  },
}
  ]
}
