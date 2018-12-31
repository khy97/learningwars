import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import authorStyles from './author.module.css';
import { Link } from '@reach/router';

class Author extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Authors" keywords={[`Learning Wars`, `Blog`, `Authors`, `Teach`, `Tech`]} />
                <div className={authorStyles.authors}>
                    <div className={authorStyles.author}>
                        <div className={authorStyles.authorImage}>
                            <img src={require('../images/huiyeonround.png')} alt="" className={authorStyles.memberImage}/>
                        </div>
                        <div className={authorStyles.authorRole}>
                            <h3 className={authorStyles.authorName}>Kim Huiyeon</h3>
                            <h4 className={authorStyles.authorName} style={{fontSize: 16, fontStyle:`italic`, fontFamily:`Thasadith`}}>Writer | Software Developer | Tech Enthusiast | Tutor</h4>
                            <p className={authorStyles.authorDesc}>Penultimate Student in Singapore Management University, pursuing Bs. in Information Systems with Analytics as 2nd major. Aspires to be a Professional <b>Software Developer</b> in the future.</p>
                            <div style={{display:`flex`}}>
                                <button style={{display:`flex`, justifyContent:`space-around`, alignItems:`center`, width:170, height:40, background:`#007bb5`, border:`none`, color:`white`, fontFamily:`Montserrat`, borderRadius:5, boxShadow:`0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`, cursor:`pointer`, marginRight:10}} onClick={() => {
                                    window.open('https://www.linkedin.com/in/huiyeonkim/' , '_blank');
                                }}>
                                    <img src={require("../images/linkedin.png")} alt="" style={{padding:0, margin:0}}/>
                                    LinkedIn
                                </button>
                                <Link style={{display:`flex`, justifyContent:`space-around`, alignItems:`center`, width:170, height:40, background:`#5cb85c`, border:`none`, color:`white`, fontFamily:`Montserrat`, borderRadius:5, boxShadow:`0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`, cursor:`pointer`, textDecoration:`none`}} to="/author-blogs" state= {{
                                    author:"Huiyeon Kim"
                                }}>
                                    <img src={require("../images/blogs.png")} alt="" style={{padding:0, margin:0}}/>
                                    Read Blogs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Author;
