import React from 'react';
import { Link } from 'gatsby'

const Article = ({ post }) => {
    return (
        <div>
            <h1 className="center-align postHeader" style={{fontFamily:`Raleway, serif`}}>{post.frontmatter.title}</h1>
            <span style={{fontFamily:`Thasadith`, display:`block`, paddingBottom:15, fontSize:12}} className="center">BY <Link to={`/author-blogs/${post.frontmatter.author.split(" ").join("_")}`} style={{color:`blue`, textDecoration:`none`}}>{post.frontmatter.author.toUpperCase()}</Link> &#x2027; {post.frontmatter.date.toUpperCase()}</span>
            <div className="article" dangerouslySetInnerHTML={{__html:post.html}} style={{fontFamily:`Raleway, serif`, lineHeight:1.8, color:`#515151`}}/>
        </div>
    )
}

export default Article