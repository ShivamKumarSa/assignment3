/** @type {import('gatsby').GatsbyConfig} */
require('dotenv').config({
  path: `.env`
})
module.exports = {
  siteMetadata: {
      title: ``,
      siteUrl: `https://www.yourdomain.tld`,
  },
  
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.REPO_NAME,
        accessToken: process.env.API_KEY,
        schemas : {
          top_pick_cards : require('./src/schemas/top_pick_cards.json'),
          nfts_owned_card : require('./src/schemas/nfts_owned_card.json'),
          my_card : {},
          my_cards : {},
          my_portfolio_card : require('./src/schemas/my_portfolio_card.json'),
        }
      }
    }
  ]
}
