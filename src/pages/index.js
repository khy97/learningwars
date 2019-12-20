import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout' 
import './index.css'
import Post from '../components/post';

class IndexPage extends React.Component {
  render() {
    const postList = this.props.data.allMarkdownRemark;
    return(
        <Layout number={postList.edges.length}>
            {postList.edges.map(({node}, i) => (
                <Post i={i} node={node}/>
            ))}
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