//  REF: https://www.youtube.com/watch?v=L32Vx_bEZhA&list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB&index=19 [ Generating Pages ]

//  have to use REQUIRE to IMPORT MODULES into 'gatsby-node.js' file, Ex: in here 'path' is a PLUG-IN

const pathModule = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`query dataProjectsSlug {
        allMarkdownRemark {
            nodes {
                id
                frontmatter {
                    slug
                }
            }
        }
    }`);

    /*
    actions.createPage({
        path: '/projects/the-dojo-coffee-house',
        component: pathModule.resolve('./src/templates/project-details.js'),
        context: { slug: 'the-dojo-coffee-house' }
    })
    */


    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/projects/'+ node.frontmatter.slug,
            component: pathModule.resolve('./src/templates/project-details.js'),
            context: { slug: node.frontmatter.slug }
        })
    })
}