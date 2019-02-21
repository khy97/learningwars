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


    const authorBlogs = new Promise((resolve, reject) => {
        const query = graphql(`{
            allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  excerpt(pruneLength: 250)
                  frontmatter {
                    date(formatString: "MMMM Do YYYY")
                    title
                    author
                    path
                    cover_image {
                        publicURL
                    }
                  }
                }
              }
            }
          }        
        `).then(res => {
            if(res.errors) {
                reject(res.errors);
            }

            res.data.allMarkdownRemark.edges.forEach(({node}) => {
                let author = node.frontmatter.author;
                let authorName = author.split(' ').join("_");
                console.log(res.data.allMarkdownRemark.edges)
                createPage({
                    path:`/author-blogs/${authorName}`,
                    component: authorTemplate,
                    context: {
                        author:node.frontmatter.author,
                        nodes: res.data.allMarkdownRemark.edges
                    }
                })
            });
            resolve();
        })

        resolve(query);
    })

    return Promise.all([blogs, authorBlogs]);
}
