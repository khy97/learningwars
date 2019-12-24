import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo' 
import './index.css'
import Post from '../components/post';

class IndexPage extends React.Component {
  render() {
    const postList = this.props.data.allMarkdownRemark;
    return(
        <div>
            <SEO title={"Home"} keywords={[`LearnWars`, `Blog`, `Learn`, `Teach`, `Tech`,"Learn Wars", "Wars", "Blog","learningwars","learnwars","warslearn","learning","Teach"]} image={require('../images/LearnWars.png')} />
            {postList.edges.map(({node}, i) => (
                <Post i={i} node={node}/>
            ))}
        </div>
    )
  }
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 150)
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