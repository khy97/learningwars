import React from 'react';
import {Link} from 'gatsby'
import authors from '../templates/Authors'

const Author = ({post}) => {
    return (
        <div className="row">
            <div className="card horizontal" id="authorcard">
                <div className="card-image">
                    <img src={require(`../images/${post.frontmatter.author}.jpg`)} alt="" className="responsive-img" style={{padding:0, margin:0}}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content" style={{display:`flex`, justifyContent:`space-around`, alignItems:`center`, flexDirection:`column`, padding:15}}>
                        <div style={{fontFamily:`Raleway, serif`, fontSize:30}}>{post.frontmatter.author}</div>
                        <div style={{fontFamily:`Raleway, serif`, fontSize:14}}>{authors[post.frontmatter.author.split(" ").join('_')]["authorTag"]}</div>
                        <p style={{fontFamily:`Raleway, serif`, fontSize:13,textAlign:`center`}}>{authors[post.frontmatter.author.split(" ").join('_')]["authorDesc"]}</p>
                    </div>
                    <div className="card-action" style={{display:`flex`, justifyContent:`center`, alignItems:`center`}}>
                        <Link style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, textAlign:`center`}} to={`/author-blogs/${post.frontmatter.author.split(" ").join("_")}`}>Read More Articles</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author;