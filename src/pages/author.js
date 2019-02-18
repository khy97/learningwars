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
                <div className="row">
                    <h1 style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`}} className="center-align">Here are your Authors</h1>
                </div>
                <div className="container">
                    <div className="row">
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
                </div>
            </Layout>
        )
    }
}

export default Author;
