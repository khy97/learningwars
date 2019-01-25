import React from 'react';
import { graphql, navigate } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import authorBlogStyles from './authorblog.module.css'
import Img from 'gatsby-image';

export default function AuthorBlogPosts({data}) {
    const postList = data.allMarkdownRemark;
    const author = postList.edges[0].node.frontmatter.author
    return (
        <Layout>
            <SEO title={postList.edges[0].node.frontmatter.author} keywords={[`Learning Wars`, `Blog`, `Learn`, `Teach`, `Tech`, `${postList.edges[0].node.frontmatter.author}`]} />
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