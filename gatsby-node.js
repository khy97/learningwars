/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = ({actions, graphql}) => {
    const {createPage, createRedirect} = actions;
    const postTemplate = path.resolve('src/templates/post.js');
    const authorTemplate = path.resolve('src/templates/author-blogs.js');
    
    
    createRedirect({
        fromPath: "https://relaxed-feynman-adbdb7.netlify.com/",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/",
    })
    createRedirect({
        fromPath: "https://relaxed-feynman-adbdb7.netlify.com",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/",
    })
    createRedirect({
        fromPath: "http://relaxed-feynman-adbdb7.netlify.com",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/",
    })
    createRedirect({
        fromPath: "http://relaxed-feynman-adbdb7.netlify.com/",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/",
    })
    createRedirect({
        fromPath: "https://learningwars.com/",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/",
    })
    createRedirect({
        fromPath: "https://learningwars.com",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/",
    })
    createRedirect({
        fromPath: "http://learningwars.com",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/",
    })
    createRedirect({
        fromPath: "http://learningwars.com/",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/",
    })
    
    createRedirect({
        fromPath: "http://learningwars.com/*",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/:splat",
    })
    createRedirect({
        fromPath: "https://learningwars.com/*",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/:splat",
    })
    
    createRedirect({
        fromPath: "http://relaxed-feynman-adbdb7.netlify.com/*",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/:splat",
    })
    createRedirect({
        fromPath: "https://relaxed-feynman-adbdb7.netlify.com/*",
        isPermanent: true,
        redirectInBrowser: true,
        toPath: "https://learnwars.com/:splat",
    })

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
                  filter: {frontmatter: {author: {eq: "Huiyeon Kim"}}}
            ) {
              edges {
                node {
                  excerpt(pruneLength: 250)
                  frontmatter {
                    date(formatString: "MMMM Do YYYY")
                    title
                    author
                    path
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
