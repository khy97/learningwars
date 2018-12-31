import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

class Contact extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Contact Us" keywords={[`Learning Wars`, `Blog`, `Authors`, `Teach`, `Tech`, `Contact`]} />
                <div>
                    <h2>Contact Us</h2>
                    <p>Do you want to be part of our team? Or do you have any queries/concerns regarding the blog? <br/>Write to us and we will get back to you as soon as possible!</p>
                </div>
            </Layout>
        )
    }
}

export default Contact;