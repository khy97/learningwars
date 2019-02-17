import React from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/layout' 
import SEO from '../components/seo'
import './index.css'

class IndexPage extends React.Component {
  render() {
    const postList = this.props.data.allMarkdownRemark;
    return(
        <Layout>
          <SEO title="Home" keywords={[`LearnWars`, `Blog`, `Learn`, `Teach`, `Tech`,"Learn Wars", "Wars", "Blog","learningwars","learnwars","warslearn","learning","Teach"]} image={require('../images/LearnWars.png')}/>
          <div className="container">
            <div className="row">
                <h1 style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`}} className="center-align">Welcome to LearnWars.</h1>
            </div>
            <div className="row">
                {postList.edges.map(({node}, i) => (              
                    <div className="col s12 m6 l4" onClick={(e) => {e.stopPropagation(); navigate(node.frontmatter.path)}} style={{cursor:`pointer`, maxHeight:440, marginTop:40}} key={i}>
                        <div className="card" style={{ boxShadow:`none`}}>
                            <div className="card-image">
                                <img src={node.frontmatter.cover_image.publicURL} className="responsive-img" alt={"Article Cover"} style={{margin:0}}/>
                            </div>
                            <div className="card-content" style={{padding:`15px 5px 15px 5px`,}}>
                                <span className="card-title" style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, fontWeight:`bold`}}>{node.frontmatter.title}</span>
                                <p style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, fontSize:14}}>{node.excerpt}</p>
                            </div>
                            <div className="card-action" style={{padding:`10px 5px`}}>
                                <div onClick={(e) => {e.stopPropagation(); navigate(`/author-blogs/${node.frontmatter.author.split(" ").join("_")}`)}} style={{fontFamily:`-apple-system,BlinknMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, textTransform:`none`, textDecoration:`none`, background:`transparent`, border:`none`, cursor:`pointer`}} className="blue-text text-darken-2">Huiyeon Kim</div>
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
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 180)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            author
            path
            cover_image {
                publicURL
            }
          }
        }
      }
    }
  }`