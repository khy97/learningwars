import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AuthorTemplate from '../templates/authorTemplate';
import authorss from '../templates/Authors';

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        let authors = []
        for(var key in authorss) {
            if(authorss.hasOwnProperty(key)) {
                authors.push(authorss[key])
            }
        }

        this.setState({authors})
    }

    render() {
        return (
            <Layout>
                <SEO title="Authors" keywords={[`Learning Wars`, `Blog`, `Authors`, `Teach`, `Tech`]} />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l8">
                            {this.state.authors.map((author, i) => (
                                <AuthorTemplate 
                                authorName={author.authorName}
                                authorTag={author.authorTag}
                                authorDesc={author.authorDesc}
                                linkedIn={author.linkedIn}
                                key={i}
                                />
                                ))}
                        </div>
                        <div className="col s12 m12 l3 offset-l1">
                            <div className="row section" style={{ padding:`35px 10px`, marginBottom:0}}>
                                <h1 style={{fontFamily:`Crimson Text`,fontWeight:`bold`}}>All Your Authors</h1>
                                <p style={{fontFamily:`Crimson Text`, color:`grey`}}>As passionate as someone can get. All the authors on Learn Wars are learners, slowly and steadily acquiring new knowledge. <br/><br/>Read their blogs to find out what they learn about.</p>
                            </div>
                            <div className="divider"></div>
                            <div className="row section" style={{ padding:`35px 10px`}}>
                                <h3 style={{fontFamily:`Crimson Text`}}>Want to Write?</h3>
                                <p style={{fontFamily:`Crimson Text`, color:`grey`}}> <span className="blue-text text-darken-2" style={{cursor:`pointer`}} onClick={() => window.location="mailto:gnldus59112@gmail.com"}>Click Here</span> and tell us what you want to write about!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Author;
