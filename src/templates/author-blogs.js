import React from 'react';
import { graphql, Link,navigate } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import authorBlogStyles from './authorblog.module.css'

export default function AuthorBlogPosts({data}) {
    const postList = data.allMarkdownRemark;
    const author = postList.edges[0].node.frontmatter.author
    return (
        <Layout>
            {/* <SEO title={postList.edges[0].node.frontmatter.author} keywords={[`Learning Wars`, `Blog`, `Learn`, `Teach`, `Tech`, `${postList.edges[0].node.frontmatter.author}`]} />
            <div>
                <div className={authorBlogStyles.authorInfo}>
                    <img className={authorBlogStyles.authorInfoImage} src={require(`../images/${author}.png`)} alt=""/>
                    <span className={authorBlogStyles.authorInfoSpan}>All Posts by &nbsp;<strong className={authorBlogStyles.authorInfoName} onClick={() => navigate(`/author#${author.split(" ").join('_')}`)}>{author}</strong></span>
                </div>
                {postList.edges.map(({node}, i) => (
                <div className={authorBlogStyles.authorBlogs} key={i}>
                    <div style={{color:`black`}}>
                        <div className={authorBlogStyles.authorBlogsDiv}>
                            <h2 onClick={() => navigate(node.frontmatter.path)} className={authorBlogStyles.authorBlogsTitle}>{node.frontmatter.title}</h2>
                            <Img fluid={node.frontmatter.cover_image.childImageSharp.fluid} className={authorBlogStyles.authorBlogsImg}/>
                            <div className={authorBlogStyles.authorBlogsDate}>
                                <span>{node.frontmatter.date}</span>
                            </div>
                            <p onClick={() => navigate(node.frontmatter.path)} className={authorBlogStyles.authorBlogsExcerpt}>{node.excerpt}</p>
                        </div>
                    </div>
                </div>
                ))}
          </div> */}
            <SEO title={postList.edges[0].node.frontmatter.author} keywords={[`Learning Wars`, `Blog`, `Learn`, `Teach`, `Tech`, `${postList.edges[0].node.frontmatter.author}`]} />
            <div className="container">
                <div className="row">
                    <h1 style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`}} className="center-align">All posts by <Link to={`/author#${author.split(" ").join('_')}`}>{author}</Link></h1>
                </div>
                <div className="row">
                    {postList.edges.map(({node}, i) => (
                        <div className="col s12 m6 l4" onClick={(e) => {e.stopPropagation(); navigate(node.frontmatter.path)}} style={{cursor:`pointer`,}}>
                        <div className="card" style={{ boxShadow:`none`}}>
                            <div className="card-image">
                                <img src={node.frontmatter.cover_image.publicURL} className="responsive-img" alt={"Article Cover"} style={{margin:0}}/>
                            </div>
                            <div class="card-content" style={{padding:`15px 5px 15px 5px`,}}>
                                <span class="card-title" style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`,}}>{node.frontmatter.title}</span>
                                <p style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, fontSize:12}}>{node.excerpt}</p>
                            </div>
                            <div class="card-action" style={{padding:`10px 5px`}}>
                                <div style={{fontFamily:`-apple-system,BlinknMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, fontSize:10}}>{node.frontmatter.date}</div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
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
              excerpt(pruneLength: 260)
              frontmatter {
                date(formatString: "MMMM Do YYYY")
                title
                author
                path
                cover_image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1240) {
                            srcSet
                        }
                    }
                }
              }
            }
          }
        }
      }
`