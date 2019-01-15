import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AuthorTemplate from '../templates/authorTemplate';

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    authorName: "Huiyeon Kim",
                    authorTag: "Writer | Software Developer | Tech Enthusiast | Tutor",
                    authorDesc: "Penultimate Student in Singapore Management University, pursuing Bs. in Information Systems with Analytics as 2nd major. Aspires to be a Professional Software Developer in the future.",
                    linkedIn: "https://www.linkedin.com/in/huiyeonkim/"
                },
            ]
        }
    }

    render() {
        return (
            <Layout>
                <SEO title="Authors" keywords={[`Learning Wars`, `Blog`, `Authors`, `Teach`, `Tech`]} />
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
