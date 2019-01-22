import React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from "gatsby-image"
import authors from './Authors';
import postStyle from './post.module.css'

export default function Template({data}) {
    const {markdownRemark : post} = data;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} keywords={[`Learning Wars`, `Blog`, `Learn`, `Teach`, `Tech`,"Learn Wars", "Wars", "Blog", "LearnWars","learningwars","learnwars","warslearn","learning","teach",post.frontmatter.title, post.frontmatter.author, post.frontmatter.path]} />
            <div className={postStyle.postMain}>
                <div style={{width:`70%`, height:`70%`, margin:`auto`}}>
                    <Img fluid={post.frontmatter.cover_image.childImageSharp.fluid} style={{marginBottom:`40px`}} />
                </div>
                <h1 style={{fontFamily:`Crete Round`}}>{post.frontmatter.title}</h1>
                <span style={{fontFamily:`Thasadith`, display:`block`, paddingBottom:15, fontSize:12}}>BY <Link to={`/author-blogs/${post.frontmatter.author.split(" ").join("_")}`} style={{color:`blue`, textDecoration:`none`}}>{post.frontmatter.author.toUpperCase()}</Link> &#x2027; {post.frontmatter.date.toUpperCase()}</span>
                <div dangerouslySetInnerHTML={{__html:post.html}} style={{fontFamily:`Open Sans`, fontSize:16}}/>
                <div style={{marginTop:50, border: `5px solid black`, padding:`5px 30px 20px`, cursor:`pointer`}} onClick={() => navigate(`/author-blogs/${post.frontmatter.author.split(" ").join("_")}`)}>
                    <div className={postStyle.postAut}>
                        <img src={require(`../images/${post.frontmatter.author}.png`)} alt="" className={postStyle.postAutImg}/>
                        <div className={postStyle.postAutInf}>
                            <span style={{fontFamily: `Crete Round`}}>{post.frontmatter.author}</span>
                            <span style={{fontFamily: `Open Sans`}}>{authors[post.frontmatter.author.split(" ").join('_')]["authorTag"]}</span>
                            <span style={{fontFamily: `Open Sans`}}>{post.frontmatter.date}</span>
                        </div>
                    </div>
                </div>
            </div>
            <JustComments />
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

class JustComments extends React.Component {
    constructor(...args) {
        super(...args)
        this.ref = React.createRef()
    }
    render() {
        return (
            <div
                ref={this.ref}
                className="just-comments"
                data-apikey={process.env.COMMENT_API}
            />
        )
    }
    componentDidMount() {
        const s = document.createElement('script')
        s.src = '//just-comments.com/w.js'
        s.setAttribute('data-timestamp', +new Date())
        this.ref.current.appendChild(s)
    }
}