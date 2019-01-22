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
                <h1 style={{fontSize:22}}>These are all your authors!</h1>
                {this.state.authors.map((author, i) => (
                    <AuthorTemplate 
                        authorName={author.authorName}
                        authorTag={author.authorTag}
                        authorDesc={author.authorDesc}
                        linkedIn={author.linkedIn}
                        key={i}
                    />
                ))}
            </Layout>
        )
    }
}

export default Author;
