import React from 'react';
import Img from 'gatsby-image';
import {navigate} from 'gatsby'

const Post = (props) => {
    return  (
        <div key={props.i} className="posts">
            <div className="row section" style={{padding:`25px 16px`,  width:`95%`, margin:`auto`, marginTop:20, background:`white`, boxShadow:`0 0 30px 0 rgba(56, 83, 190, 0.05)`, borderRadius:4}}>
                <div className="col s12 l4" onClick={(e) => {e.stopPropagation(); navigate(props.node.frontmatter.path)}} style={{cursor:`pointer`}}>
                    <Img fluid={props.node.frontmatter.cover_image.childImageSharp.fluid} alt={props.node.frontmatter.title} style={{borderRadius:4}}/>
                </div>
                <div className="col s12 l8" onClick={(e) => {e.stopPropagation(); navigate(props.node.frontmatter.path)}} style={{cursor:`pointer`}}>
                    <h2 style={{fontFamily:`Raleway, serif`, fontSize:20}}>{props.node.frontmatter.title}</h2>
                    <p style={{fontFamily:`Raleway, serif`, fontSize:15}}>{props.node.excerpt}</p>
                    <span style={{fontFamily:`Raleway, serif`, textTransform:`none`, textDecoration:`none`, background:`transparent`, border:`none`, cursor:`pointer`, fontSize:14}}>{props.node.frontmatter.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;