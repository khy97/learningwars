import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image'
import Article from '../components/Article';

const Template = ({data}) => {
    const [y, setY] = useState(null);

    useEffect(() => {
        var yy = y
        yy = window.matchMedia("(max-width: 900px)")
        containerWidth(yy)
        yy.addListener(containerWidth)
        setY(yy);
        return () => {
            yy.removeListener(containerWidth)
            setY(null)
        }
    }, [y])

    const containerWidth = (x) => {
        if (x.matches) { // If media query matches
            document.getElementById("postContainer").style.marginLeft='5px'
            document.getElementById("postContainer").style.marginRight='5px'
            document.getElementById("postContainer").style.padding='30px'
            document.querySelector(".postHeader").style.fontSize='20px'
            document.querySelector(".article").style.fontSize='15px'
        } else {
            document.getElementById("postContainer").style.marginLeft='30px'
            document.getElementById("postContainer").style.marginRight='30px'
            document.getElementById("postContainer").style.padding='50px'
            document.querySelector(".postHeader").style.fontSize='40px'
            document.querySelector(".article").style.fontSize='16px'
        }
    }

    const {markdownRemark : post} = data;
    return (
        <Layout image={"https://learnwars.com"+post.frontmatter.cover_image.publicURL} title={post.frontmatter.title} path={post.frontmatter.path}>
            <div id="postContainer" style={{background:`white`, marginTop:30, marginBottom:30, boxShadow:`0 0 30px 0 rgba(56, 83, 190, 0.05)`, borderRadius:4}}>
                <Img fluid={post.frontmatter.cover_image.childImageSharp.fluid} style={{margin:`auto`, width:`75%`, marginBottom:20}}/>
                <Article post={post} />
                <div>
                    <JustComments />
                </div>
            </div>
        </Layout>
    )
}

export default Template

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
                        fluid(maxWidth:1800){
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