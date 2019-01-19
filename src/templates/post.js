import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from "gatsby-image"
import authors from './Authors';
import postStyle from './post.module.css'

export default function Template({data}) {
    const {markdownRemark : post} = data;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} keywords={[`Learning Wars`, `Blog`, `Learn`, `Teach`, `Tech`]} />
            <div style={{background:`rgba(255,255,255,1)`, padding:`10px 15px 10px`, borderRadius:2}}>
                <div style={{width:`70%`, height:`70%`, margin:`auto`}}>
                    <Img fluid={post.frontmatter.cover_image.childImageSharp.fluid} style={{marginBottom:`40px`}} />
                </div>
                <h1 style={{fontFamily:`Crete Round`}}>{post.frontmatter.title}</h1>
                <span style={{fontFamily:`Thasadith`, display:`block`, paddingBottom:15, fontSize:12}}>BY <Link to={`/author-blogs/${post.frontmatter.author.split(" ").join("_")}`} style={{color:`blue`, textDecoration:`none`}}>{post.frontmatter.author.toUpperCase()}</Link> &#x2027; {post.frontmatter.date.toUpperCase()}</span>
                <div dangerouslySetInnerHTML={{__html:post.html}} style={{fontFamily:`Open Sans`, lineHeight:`1.6rem`, wordSpacing:`0.5px`}}/>
                <div>
                    <span style={{fontFamily:`Open Sans`}}>Written By:</span>
                    <div className={postStyle.postAut}>
                        <img src={require(`../images/${post.frontmatter.author}.png`)} alt="" className={postStyle.postAutImg}/>
                        <div className={postStyle.postAutInf}>
                            <span>{post.frontmatter.author}</span>
                            <span>{authors[post.frontmatter.author.split(" ").join('_')]["authorTag"]}</span>
                            <span>{post.frontmatter.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html,
            frontmatter {
                path
                title
                author
                date(formatString: "MMMM Do YYYY")
                cover_image {
                    publicURL
                    childImageSharp {
                      fluid(maxHeight:500) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            }
        }
    }
`