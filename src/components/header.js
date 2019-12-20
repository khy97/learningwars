import React from 'react'
import { navigate } from 'gatsby'

const Header = ({ number }) => {
    return (
        <div style={{width:`95%`, margin:`auto`, marginTop:25}}>
            <h2 style={number === undefined ? {fontFamily:`Raleway`, fontSize:20, cursor:`pointer`} : {fontFamily:`Raleway`, fontSize:20}} onClick={number === undefined ? () => navigate('/') : null}>{number === undefined ? '< Back to all posts': `(${number}) Recent Blog Posts`}</h2>
            <hr />
        </div>
    )
}

export default Header;