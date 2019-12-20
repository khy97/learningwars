/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions;
    const postTemplate = path.resolve('src/templates/post.js');
    const authorTemplate = path.resolve('src/templates/author-blogs.js');
    

    const blogs = new Promise((resolve, reject) => {
        const query = graphql(`{
            allMarkdownRemark {
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            path
                            title
                            author
                        }
                    }
                }
            }
        }`).then(res => {
            if(res.errors) {
                reject(res.errors);
            }
            res.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: node.frontmatter.path,
                    component: postTemplate
                });
            });
            resolve();
        });
        resolve(query);
    })


    
    return Promise.all([blogs]);
}
