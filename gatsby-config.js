module.exports = {
  siteMetadata: {
    title: 'Nikolas Melgarejo\'s Portfolio'
  },
  pathPrefix: '/src/portfolio',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/portfolio/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-favicon'
  ]
};

//NEED GATSBY-CONFIG FILE TO EFFECTIVELY ALLOW PLUGINS
