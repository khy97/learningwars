import React from 'react';
import authorStyles from './author.module.css';
import { Link } from 'gatsby';

class AuthorTemplate extends React.Component {
    render() {
        return (
                <div className={authorStyles.authors}>
                    <div className={authorStyles.author}>
                        <div className={authorStyles.authorImage}>
                            <img src={require(`../images/${this.props.authorName}.png`)} alt="" className={authorStyles.memberImage}/>
                        </div>
                        <div className={authorStyles.authorRole}>
                            <h3 className={authorStyles.authorName}>{this.props.authorName}</h3>
                            <h4 className={authorStyles.authorName} style={{fontSize: 16, fontStyle:`italic`, fontFamily:`Thasadith`}}>{this.props.authorTag}</h4>
                            <p className={authorStyles.authorDesc}>{this.props.authorDesc}</p>
                            <div style={{display:`flex`}}>
                                <button style={{display:`flex`, justifyContent:`space-around`, alignItems:`center`, width:170, height:40, background:`#007bb5`, border:`none`, color:`white`, fontFamily:`Montserrat`, borderRadius:5, boxShadow:`0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`, cursor:`pointer`, marginRight:10}} onClick={() => {
                                    window.open(`${this.props.linkedIn}` , '_blank');
                                }}>
                                    <img src={require("../images/linkedin.png")} alt="" style={{padding:0, margin:0}}/>
                                    LinkedIn
                                </button>
                                <Link style={{display:`flex`, justifyContent:`space-around`, alignItems:`center`, width:170, height:40, background:`#5cb85c`, border:`none`, color:`white`, fontFamily:`Montserrat`, borderRadius:5, boxShadow:`0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`, cursor:`pointer`, textDecoration:`none`}} to={`/author-blogs/${this.props.authorName.split(" ").join("_")}`} >
                                    <img src={require("../images/blogs.png")} alt="" style={{padding:0, margin:0}}/>
                                    Read Blogs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default AuthorTemplate;
