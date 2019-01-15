import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Template({data}) {
    const {markdownRemark : post} = data;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} keywords={[`Learning Wars`, `Blog`, `Learn`, `Teach`, `Tech`]} />
            <div style={{background:`rgba(255,255,255,1)`, padding:`10px 30px 10px`, borderRadius:2}}>
                <h1 style={{fontFamily:`Crete Round`}}>{post.frontmatter.title}</h1>
                <span style={{fontFamily:`Thasadith`, display:`block`, paddingBottom:15, fontSize:12}}>BY <Link to={`/author-blogs/${post.frontmatter.author.split(" ").join("_")}`} style={{color:`blue`, textDecoration:`none`}}>{post.frontmatter.author.toUpperCase()}</Link> &#x2027; {post.frontmatter.date.toUpperCase()}</span>
                <div dangerouslySetInnerHTML={{__html:post.html}} style={{fontFamily:`Helvetica`, lineHeight:`1.6rem`, wordSpacing:`0.5px`}}/>
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
            }
        }
    }
`