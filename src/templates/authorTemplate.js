import React from 'react';
import authorStyles from './author.module.css';
import { navigate } from 'gatsby';

class AuthorTemplate extends React.Component {
    render() {
        return (
                <div className={authorStyles.authors} id={this.props.authorName.split(" ").join('_')} onClick={() => {
                    navigate(`/author-blogs/${this.props.authorName.split(" ").join("_")}`)
                }}>
                    <div className={authorStyles.author}>
                        <div className={authorStyles.authorImage}>
                            <img src={require(`../images/${this.props.authorName}.png`)} alt="" className={authorStyles.memberImage}/>
                        </div>
                            <div className={authorStyles.authorRole}>
                            <h3 className={authorStyles.authorName}>{this.props.authorName}</h3>
                            <h4 className={authorStyles.authorName} style={{fontSize: 16, fontStyle:`italic`, fontFamily:`Thasadith`}}>{this.props.authorTag}</h4>
                            <p className={authorStyles.authorDesc}>{this.props.authorDesc}</p>
                            <div className={authorStyles.authorButtons}>
                                <img src={require("../images/linkedin.png")} alt="" style={{width:38}} className={authorStyles.authorImg} onClick={() => {window.open('https://www.linkedin.com/in/huiyeonkim/', "_blank")}}/>
                                <img src={require('../images/website.png')} alt=""  className={authorStyles.authorImg} onClick={() => {window.open('https://huiyeon5.github.io', "_blank")}}/>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default AuthorTemplate;
