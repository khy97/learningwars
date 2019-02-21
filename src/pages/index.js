import React from 'react'
import { graphql, navigate } from 'gatsby'
import Img from 'gatsby-image';
import Layout from '../components/layout' 
import SEO from '../components/seo'
import './index.css'

class IndexPage extends React.Component {
  render() {
    const postList = this.props.data.allMarkdownRemark;
    return(
        <Layout>
          <SEO title="Home" keywords={[`LearnWars`, `Blog`, `Learn`, `Teach`, `Tech`,"Learn Wars", "Wars", "Blog","learningwars","learnwars","warslearn","learning","Teach"]} image={require('../images/LearnWars.png')}/>
          <div className="container" style={{width:`95%`}}>
            <div className="row">
                <div className="col s12 m12 l8">
                    {postList.edges.map(({node}, i) => (
                        <div key={i}>
                            <div className="row section" style={{padding:`40px 15px`}}>
                                <div className="col s12 m12 l4" onClick={(e) => {e.stopPropagation(); navigate(node.frontmatter.path)}} style={{cursor:`pointer`}}>
                                    <Img fluid={node.frontmatter.cover_image.childImageSharp.fluid} alt={node.frontmatter.title}/>
                                </div>
                                <div className="col s12 m12 l8" onClick={(e) => {e.stopPropagation(); navigate(node.frontmatter.path)}} style={{cursor:`pointer`}}>
                                    <h2 style={{fontFamily:`Crimson Text, serif`}}>{node.frontmatter.title}</h2>
                                    <h3 onClick={(e) => {e.stopPropagation(); navigate(`/author-blogs/${node.frontmatter.author.split(" ").join("_")}`,{state:{author:node.frontmatter.author}})}} style={{fontFamily:`Crimson Text, serif`, textTransform:`none`, textDecoration:`none`, background:`transparent`, border:`none`, cursor:`pointer`, fontSize:14}} className="blue-text text-darken-2"><span style={{color:`gray`}}>Written By: </span>{node.frontmatter.author}</h3>
                                    <p style={{fontFamily:`Crimson Text, serif`, fontSize:15}}>{node.excerpt}</p>
                                    <span style={{fontFamily:`Crimson Text, serif`, textTransform:`none`, textDecoration:`none`, background:`transparent`, border:`none`, cursor:`pointer`, fontSize:14}}>{node.frontmatter.date}</span>
                                </div>
                            </div>
                            <div className="divider"></div>
                        </div>
                    ))}
                </div>
                <div className="col s12 m12 l3 offset-l1" >
                    <div className="row section" style={{padding:`40px 15px`, marginBottom:0}}>
                        <h1 style={{fontFamily:`Crimson Text, serif`, fontWeight:`bold`}}>About Learn Wars</h1>
                        <p style={{fontFamily:`Crimson Text, serif`, color:`grey`}}>Learning something can be stressful and tiring. Studies show that Writing about what you learn not only helps in making you understand better but also remembering it for a longer time. <br/><br/>
                        This website is for passionate learners who wants to write and share about what they are learning, whether it be technology or finance.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="row section" style={{padding:`40px 15px`, marginBottom:0}}>
                        <h3 style={{fontFamily:`Crimson Text, serif`}}>Want to Write?</h3>
                        <p style={{fontFamily:`Crimson Text, serif`, color:`grey`}}> <span className="blue-text text-darken-2" style={{cursor:`pointer`}} onClick={() => window.location="mailto:gnldus59112@gmail.com"}>Click Here</span> and tell us what you want to write about!</p>
                    </div>
                    <div className="divider"></div>
                </div>
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
          excerpt(pruneLength: 300)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            author
            path
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
    }
  }`