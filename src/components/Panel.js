import React, {useState, useEffect} from 'react';
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'


const Panel = ({match}) => {
    const [smatch , setSmatch] = useState(match)

    useEffect(() => {
        console.log("CHANGED")
        setSmatch(match);
    }, [match])

    return (
        <StaticQuery 
            query={imageQuery}
            render={data => {
                if(smatch) {
                    return (
                        <div style={{width:`100%`, height:`100%`, display:`flex`, justifyContent:`center`, alignItems:`center`, flexDirection:`column`, padding:30}}>
                            <Img fluid={data.file.childImageSharp.fluid} style={{borderRadius:`50%`, width:`20%`, marginBottom:10, minWidth:90}} alt=""/>
                            <div style={{display:`flex`, flexDirection:`column`, alignItems:`center`,  textAlign:`center`}}>
                                <h1 style={{ fontFamily:`Raleway`, fontSize:`1rem`, marginBottom:10,  textAlign:`center`}}>Huiyeon Kim</h1>
                                <h2 style={{color:`#00ffd5`, fontFamily:`Raleway`, fontSize:`0.6rem`,  textAlign:`center`, marginBottom:10}}>Software Engineer @ Goldman Sachs</h2>
                            </div>
                            <p style={{fontFamily:`Raleway`, textAlign:`center`,fontSize:`0.65rem`, lineHeight:`1.5`, margin:0}}>Welcome to <strong>LearnWars</strong>! This is a blog where I share my growing knowledge with the public. I speak Tech and Programming. <br/><br/> Enjoy and  let me know any feedback!</p>
                        </div>
                    )
                } else {
                    return (
                        <div style={{width:`100%`, height:`100%`, display:`flex`, justifyContent:`center`, alignItems:`center`, flexDirection:`column`, padding:40}}>
                            <Img fluid={data.file.childImageSharp.fluid} style={{borderRadius:`50%`, width:`30%`, marginBottom:30, minWidth:100}} alt=""/>
                            <div style={{display:`flex`, flexDirection:`column`, alignItems:`center`,  textAlign:`center`}}>
                                <h1 style={{ fontFamily:`Raleway`, fontSize:`1.5rem`, marginBottom:10,  textAlign:`center`}}>Huiyeon Kim</h1>
                                <h2 style={{color:`#00ffd5`, fontFamily:`Raleway`, fontSize:`0.85rem`,  textAlign:`center`}}>Software Engineer @ Goldman Sachs</h2>
                            </div>
                            <p style={{fontFamily:`Raleway`, textAlign:`center`,}}>Welcome to <strong>LearnWars</strong>! This is a blog where I share my growing knowledge with the public. I speak Tech and Programming. <br/><br/> Enjoy and  let me know any feedback!</p>
                            <div>

                            </div>
                        </div>
                    )
                }
            }}
        />
    )
}

export default Panel;

const imageQuery = graphql`
  query {
    file(relativePath: { eq: "Huiyeon Kim.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`