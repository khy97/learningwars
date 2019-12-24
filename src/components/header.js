import React from 'react'
import { navigate } from 'gatsby'

const Header = ({number}) => {
    let location = "";
    if(typeof window !== undefined) {
        location = window.location.href;
    }
    const check = location[location.length - 1] === 'https://learnwars.com/' || location[location.length - 1] === 'https://learnwars.com' || location[location.length - 1] === 'https://www.learnwars.com/' || location[location.length - 1] === 'https://www.learnwars.com'
    console.log(location)
    return (
        <div style={{width:`95%`, margin:`auto`, marginTop:25}}>
            <h2 style={!check ? {fontFamily:`Raleway`, fontSize:20, cursor:`pointer`} : {fontFamily:`Raleway`, fontSize:20}} onClick={() => navigate('/')}>{!check ? '< Back to all posts': `(${number}) Recent Blog Posts`}</h2>
            <hr />
        </div>
    )
}

export default Header;