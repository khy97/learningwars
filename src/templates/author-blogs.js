import React from 'react';
import {navigate } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import authors from './Authors';

export default function AuthorBlogPosts({pageContext}) {
    const author = pageContext.author
    pageContext.nodes = pageContext.nodes.filter(node => node.node.frontmatter.author === pageContext.author)
    return (
        <Layout>
            <SEO title={pageContext.author} keywords={[`Learning Wars`, `Blog`, `Learn`, `Teach`, `Tech`, `${pageContext.author}`]} description={authors[author.split(" ").join('_')].authorDesc}/>
            <div className="container" style={{width:`95%`}}>
                <div className="row">
                    <div className="col s12 m12 l8">
                        {pageContext.nodes.map(({node}, i) => (
                            <div key={i}>
                                <div className="row section" style={{padding:`40px 15px`}}>
                                    <div className="col s12 m12 l4" onClick={(e) => {e.stopPropagation(); navigate(node.frontmatter.path)}} style={{cursor:`pointer`}}>
                                        <img src={node.frontmatter.cover_image.publicURL} className="responsive-img" alt={"Article Cover"} style={{margin:0}}/>
                                    </div>
                                    <div className="col s12 m12 l8" onClick={(e) => {e.stopPropagation(); navigate(node.frontmatter.path)}} style={{cursor:`pointer`}}>
                                        <h2 style={{fontFamily:`Crimson Text`}}>{node.frontmatter.title}</h2>
                                        <p style={{fontFamily:`Crimson Text`, fontSize:15}}>{node.excerpt}</p>
                                        <span style={{fontFamily:`Crimson Text`, textTransform:`none`, textDecoration:`none`, background:`transparent`, border:`none`, cursor:`pointer`, fontSize:14}}>{node.frontmatter.date}</span>
                                    </div>
                                </div>
                                <div className="divider"></div>
                            </div>
                        ))}
                    </div>
                    <div className="col s12 m12 l3 offset-l1" >
                        <div className="row section" style={{padding:`40px 15px`, marginBottom:0}}>
                            <img src={require(`../images/${pageContext.author}.jpg`)} className="responsive-img" alt={"Article Cover"} style={{margin:0}}/>
                            <h1 style={{fontFamily:`Crimson Text`, fontWeight:`bold`}}>{pageContext.author}'s Blogs</h1>
                            <h4 style={{fontFamily:`Crimson Text`,fontSize:16, fontWeight:`normal`}}>{authors[author.split(" ").join('_')].authorTag}</h4>
                            <p style={{fontFamily:`Crimson Text`, color:`grey`}}>{authors[author.split(" ").join('_')].authorDesc}</p>
                        </div>
                        <div className="divider"></div>
                        <div className="row section" style={{padding:`40px 15px`, marginBottom:0}}>
                            <h3 style={{fontFamily:`Crimson Text`}}>Want to Write?</h3>
                            <p style={{fontFamily:`Crimson Text`, color:`grey`}}> <span className="blue-text text-darken-2" style={{cursor:`pointer`}} onClick={() => window.location="mailto:gnldus59112@gmail.com"}>Click Here</span> and tell us what you want to write about!</p>
                        </div>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}