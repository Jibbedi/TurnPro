module.exports = {
  siteMetadata: {
    title: 'TurnPro.in',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`
      },
    },
    'gatsby-transformer-remark'
  ],
}
