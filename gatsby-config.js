/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    }
  ],
  siteMetadata: {
    title: 'Hello-World-Site',
    description: 'SITE DESCRIPTION OF THE PROJECT',
    copyright: 'COPY RIGHT TEXT TO DISPLAY',
    data: {
      data_key_1: 'data_value_1',
      data_key_2: 'data_value_2',
      data_key_3: 'data_value_3',
      data_key_4: 'data_value_4',
      data_key_5: 'data_value_5'
    },
    contact: 'jahidrassel@jahidrassel.com'
  }
}
