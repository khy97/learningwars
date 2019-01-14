import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Template({data}) {
    const {markdownRemark : post} = data;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} keywords={[`Learning Wars`, `Blog`, `Learn`, `Teach`, `Tech`]} />
            <div style={{background:`rgba(255,255,255,1)`, padding:`30px 30px 10px`, borderRadius:2, boxShadow:`0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,  borderTop: `4px solid #ba3e32`}}>
                <h1>{post.frontmatter.title}</h1>
                <span style={{fontFamily:`Thasadith`, display:`block`, paddingBottom:10, fontSize:14}}>BY <Link to='/author' style={{color:`blue`, textDecoration:`none`}}>{post.frontmatter.author.toUpperCase()}</Link> &#x2027; {post.frontmatter.date.toUpperCase()}</span>
                <div dangerouslySetInnerHTML={{__html:post.html}} style={{fontFamily:`Thasadith`}}/>
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