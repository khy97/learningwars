import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Share from '../components/Share.jsx'
// import './MyBlogPost.css'
import authors from './Authors';

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            x:null,
            y:null
        }
    }

    componentDidMount() {
        var x = this.state.x
        var y = this.state.y
        x = window.matchMedia("(max-width: 700px)")
        y = window.matchMedia("(max-width: 900px)")
        this.authorHor(x) // Call listener function at run time
        this.containerWidth(y) // Call listener function at run time
        x.addListener(this.authorHor) // Attach listener function on state changes 
        y.addListener(this.containerWidth) // Attach listener function on state changes 
        this.setState({x,y})
    }
    
    componentWillUnmount() {
        this.state.x.removeListener(this.authorHor) // Attach listener function on state changes 
        this.state.y.removeListener(this.containerWidth) // Attach listener function on state changes 
        this.setState({x:null,y:null})
    }
    
    authorHor = (x) => {
        if (x.matches) { // If media query matches
            document.getElementById("authorcard").classList.remove("horizontal")
        } else {
            document.getElementById("authorcard").classList.add("horizontal")
        }
    }

    containerWidth = (x) => {
        if (x.matches) { // If media query matches
            document.getElementById("postContainer").style.width='85%'
        } else {
            document.getElementById("postContainer").style.width='55%'
        }
    }

    render() {
        const {markdownRemark : post, site} = this.props.data;
        return (
            <Layout>
                <SEO title={post.frontmatter.title} keywords={[`Learning Wars`, `Blog`, `Learn`, `Teach`, `Tech`,"Learn Wars", "Wars", "Blog", "LearnWars","learningwars","learnwars","warslearn","learning","teach",post.frontmatter.title, post.frontmatter.author, post.frontmatter.path]} image={post.frontmatter.cover_image.publicURL}/>
                <div className="container" id="postContainer">
                    <div className="row">
                        <div className="col s12 m12 l10 offset-l1">
                            <img src={post.frontmatter.cover_image.publicURL} alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <h1 className="center-align" style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`}}>{post.frontmatter.title}</h1>
                        <span style={{fontFamily:`Thasadith`, display:`block`, paddingBottom:15, fontSize:12}} className="center">BY <Link to={`/author-blogs/${post.frontmatter.author.split(" ").join("_")}`} style={{color:`blue`, textDecoration:`none`}}>{post.frontmatter.author.toUpperCase()}</Link> &#x2027; {post.frontmatter.date.toUpperCase()}</span>
                        <div dangerouslySetInnerHTML={{__html:post.html}} style={{fontFamily:`Open Sans`, fontSize:16, color:`black`}}/>
                    </div>
                    <div className="row">
                        {/* <div className="col s12 m6 l6 offset-m3 offset-l3"> */}
                            <div className="card horizontal" id="authorcard">
                                <div className="card-image">
                                    <img src={require(`../images/${post.frontmatter.author}.jpg`)} alt="" className="responsive-img" style={{padding:0, margin:0}}/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content" style={{display:`flex`, justifyContent:`space-around`, alignItems:`center`, flexDirection:`column`, padding:15}}>
                                        <div style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, fontSize:30}}>{post.frontmatter.author}</div>
                                        <div style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, fontSize:12}}>{authors[post.frontmatter.author.split(" ").join('_')]["authorTag"]}</div>
                                        <p style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, fontSize:12,textAlign:`center`}}>{authors[post.frontmatter.author.split(" ").join('_')]["authorDesc"]}</p>
                                    </div>
                                    <div className="card-action" style={{display:`flex`, justifyContent:`center`, alignItems:`center`}}>
                                        <Link style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, textAlign:`center`}} to={`/author-blogs/${post.frontmatter.author.split(" ").join("_")}`}>Read More Articles</Link>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    <div>
                        Share: 
                        <Share 
                            socialConfig={{
                                twitterHandle:`${site.twitterHandle}`,
                                config: {
                                    url: `${site.siteMetadata.url}${post.frontmatter.path}`,
                                    title: `${post.frontmatter.title}`,
                                },
                            }}
                        />
                        <JustComments />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Template

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        site {
            siteMetadata {
                url
                twitterHandle
            }
        }
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html,
            frontmatter {
                path
                title
                author
                date(formatString: "MMMM Do YYYY")
                cover_image {
                    publicURL
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