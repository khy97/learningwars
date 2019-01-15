import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function AuthorBlogPosts({data}) {
    const postList = data.allMarkdownRemark;
    const author = postList.edges[0].node.frontmatter.author
    return (
        <Layout>
            <SEO title={postList.edges[0].node.frontmatter.author} keywords={[`Learning Wars`, `Blog`, `Learn`, `Teach`, `Tech`, `${postList.edges[0].node.frontmatter.author}`]} />
            <div>
                <div style={{display:`grid`, gridTemplateColumns:`300px auto`, marginBottom:30, }}>
                    <img src={require(`../images/${author}.png`)} alt="" style={{width: 150, margin:`auto`}}/>
                    <div style={{display:`flex`, justifyContent:`flex-start`, alignItems:`center`}}>
                        <span style={{fontFamily: `Crete Round`, fontSize:30}}>All Posts by <strong>{author}</strong></span>
                    </div>
                </div>
                {postList.edges.map(({node}, i) => (
                <div style={{borderRadius:2,boxShadow:`0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`, border:`1px soild black`, background:`white`, zIndex:5, marginBottom:20, padding:`20px 10px 5px 20px`, borderTop: `4px solid #ba3e32`}} key={i}>
                    <Link to={node.frontmatter.path} style={{textDecoration:`none`, color:`black`}}>
                        <div style={{display:`grid`, gridTemplateRows:`50px auto 40px`, fontFamily:`Raleway`}}>
                            <h2 style={{gridRow:`1/2`, fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`}}>{node.frontmatter.title}</h2>
                            <div style={{gridRow:`3/4`, display:`flex`, flexDirection:`column`, fontSize:13, margin:`auto 0`, paddingTop:5, color:`#757575`,}}>
                                <span>{node.frontmatter.date}</span>
                            </div>
                            <p style={{gridRow:`2/3`, margin:`auto`, fontFamily:`Thasadith`}}>{node.excerpt}</p>
                        </div>
                    </Link>
                </div>
                ))}
          </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostsByAuthor($author: String!) {
        allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: {frontmatter: {author: {eq: $author}}}
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
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
`