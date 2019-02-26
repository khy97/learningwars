import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AuthorTemplate from '../templates/authorTemplate';
import authorss from '../templates/Authors';

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            authorImage: {}
        }
    }

    componentDidMount() {
        let authors = []
        let authorImage = {}
        for(var key in authorss) {
            if(authorss.hasOwnProperty(key)) {
                authors.push(authorss[key])
                this.props.data.allImageSharp.edges.forEach(node => {
                    if(node.node.fluid.originalName === authorss[key].authorName+".jpg") {
                        authorImage[authorss[key].authorName] = node.node.fluid
                    }
                })
            }
        }
        console.log(authorImage)
        this.setState({authors, authorImage})
    }

    render() {
        return (
            <Layout>
                <SEO title="Authors" keywords={[`Learning Wars`, `Blog`, `Authors`, `Teach`, `Tech`]} path={'/author'}/>
                <div className="container" style={{width:`95%`}}>
                    <div className="row">
                        <div className="col s12 m12 l8">
                            {this.state.authors.map((author, i) => (
                                <AuthorTemplate 
                                    authorName={author.authorName}
                                    authorTag={author.authorTag}
                                    authorDesc={author.authorDesc}
                                    linkedIn={author.linkedIn}
                                    authorImage={this.state.authorImage[author.authorName]}
                                    key={i}
                                />
                            ))}
                        </div>
                        <div className="col s12 m12 l3 offset-l1">
                            <div className="row section" style={{ padding:`35px 10px`, marginBottom:0}}>
                                <h1 style={{fontFamily:`Crimson Text, serif`,fontWeight:`bold`}}>All Your Authors</h1>
                                <p style={{fontFamily:`Crimson Text, serif`, color:`grey`}}>As passionate as someone can get. All the authors on Learn Wars are learners, slowly and steadily acquiring new knowledge. <br/><br/>Read their blogs to find out what they learn about.</p>
                            </div>
                            <div className="divider"></div>
                            <div className="row section" style={{ padding:`35px 10px`}}>
                                <h3 style={{fontFamily:`Crimson Text, serif`}}>Want to Write?</h3>
                                <p style={{fontFamily:`Crimson Text, serif`, color:`grey`}}> <span className="blue-text text-darken-2" style={{cursor:`pointer`}} onClick={() => window.location="mailto:gnldus59112@gmail.com"}>Click Here</span> and tell us what you want to write about!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Author;


export const ImageQuery = graphql`
  query ImageQuery {
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }`
