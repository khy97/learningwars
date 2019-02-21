import React from 'react';
// import authorStyles from './author.module.css';
import { Link } from 'gatsby';
import Img from 'gatsby-image'

class AuthorTemplate extends React.Component {
    render() {
        return (
            <div>
                <div className="row section" id={this.props.authorName.split(" ").join('_')} style={{padding:`35px 10px`, marginBottom:0}}>
                    <div className="col s12 l4" >
                        {/* <img src={require(`../images/${this.props.authorName}.jpg`)} alt="" className="responsive-img"/> */}
                        <Img fluid={this.props.authorImage}/> 
                    </div>
                    <div className="col s12 l8">
                        <h2 style={{fontFamily:`Crimson Text`}}>{this.props.authorName}</h2>
                        <h4 style={{fontFamily:`Crimson Text`, fontStyle:`italic`}}>{this.props.authorTag}</h4>
                        <p style={{fontFamily:`Crimson Text`,color:`grey`}}>{this.props.authorDesc}</p>
                        <Link to={`/author-blogs/${this.props.authorName.split(" ").join('_')}`} style={{fontFamily:`Crimson Text`}}>Read Articles</Link>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        )
    }
}

export default AuthorTemplate;
