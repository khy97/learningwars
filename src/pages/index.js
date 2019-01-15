import React from 'react'
import { graphql,navigate } from 'gatsby'
import Layout from '../components/layout' 
import SEO from '../components/seo'


class IndexPage extends React.Component {
  render() {
    const postList = this.props.data.allMarkdownRemark;
    return(
        <Layout>
          <SEO title="Home" keywords={[`Learning Wars`, `Blog`, `Learn`, `Teach`, `Tech`]} />
          <div>
            {postList.edges.map(({node}, i) => (
              <div style={{borderRadius:2,boxShadow:`0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`, border:`1px soild black`, background:`rgba(255,255,255,1)`, zIndex:5, marginBottom:20, padding:`20px 10px 20px 20px`, borderTop: `4px solid #ba3e32`}} key={i} >
                <div style={{textDecoration:`none`, color:`black`,}}>
                  <div style={{display:`grid`, gridTemplateRows:`50px auto 50px`, fontFamily:`Raleway`}}>
                    <h2 style={{gridRow:`1/2`, fontFamily:`Crete Round`, cursor:`pointer`}} onClick={() => navigate(node.frontmatter.path)}>{node.frontmatter.title}</h2>
                    <div style={{gridRow:`3/4`, display:`flex`, flexDirection:`column`, fontSize:13, margin:`auto 0`, paddingTop:5, color:`#757575`,}}>
                      <span>{node.frontmatter.date}</span>
                      <span>Written By: <div onClick={() => {navigate(`/author-blogs/${node.frontmatter.author.split(" ").join("_")}`); return true;}} style={{color:`blue`, textDecoration:`none`, display:'inline', zIndex:1000, cursor:`pointer`}} role="link">{node.frontmatter.author}</div></span>
                    </div>
                    <p style={{gridRow:`2/3`, margin:`auto`, fontFamily:`Thasadith`, cursor:`pointer`}} onClick={() => navigate(node.frontmatter.path)}>{node.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
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
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            author
            path
      			
          }
        }
      }
    }
  }`