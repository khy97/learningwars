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
                            <div className={authorStyles.authorButtons}>
                                <button className={authorStyles.authorButton} onClick={() => {window.open('https://www.linkedin.com/in/huiyeonkim/', "_blank")}}>
                                    <img src={require("../images/linkedin.png")} alt="" style={{padding:0, margin:0}}/>
                                    LinkedIn
                                </button>
                                <Link className={authorStyles.authorButton} style={{background:`#28a745`, textDecoration:`none`}} to={`/author-blogs/${this.props.authorName.split(" ").join("_")}`} >
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
