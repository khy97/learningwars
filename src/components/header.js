import { Link, navigate } from 'gatsby'
import React from 'react'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            x:null,
        }
    }

    componentDidMount() {
        var x = this.state.x
        x = window.matchMedia("(max-width: 980px)")
        this.authorHor(x) // Call listener function at run time
        x.addListener(this.authorHor) // Attach listener function on state changes 
        this.setState({x})
    }
    
    componentWillUnmount() {
        this.state.x.removeListener(this.authorHor) // Attach listener function on state changes 
        this.setState({x:null})
    }
    
    authorHor = (x) => {
        if (x.matches) { // If media query matches
            document.querySelector(".brand-logo").style.transform = `translateX(-50%) translateY(-50%)`
            document.querySelector(".brand-logo > span").style.fontSize = `16px`
        } else {
            document.querySelector(".brand-logo").style.transform = `translateY(-50%)`
            document.querySelector(".brand-logo > span").style.fontSize = `20px`
        }
    }
    render() {
        return (
            <nav style={{height:80, backgroundColor:`transparent`, boxShadow:`0 4px 12px 0 rgba(0,0,0,.05)`, color:`black`, borderTop:`4px solid #ba3e32`}} id="nav">
                <div className="container nav-wrapper" style={{padding:`0px 25px`, position:`relative`, height:`100%`, width:`95%`}}>
                    <div style={{ position:`absolute`, top:`50%`, transform:`translateY(-50%)`, display:`flex`, justifyContent:`flex-start`, alignItems:`center`}} className="brand-logo">
                        <img src={require('../images/icon.png')} alt=""  style={{height:50, margin:0, cursor:`pointer`}} onClick={() => navigate('/')}/>
                        <span style={{color:`black`, paddingLeft:5, fontFamily:`Crimson Text, serif`, fontSize:20, cursor:`pointer`}} onClick={() => navigate('/')}>Learn Wars</span>
                    </div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down" style={{zIndex:1000, height:`100%`}}>
                        <li style={{height:`100%`, margin:0}}><Link to={"/"} style={{color:`black`, fontFamily:`Crimson Text, serif`, height:`100%`, display:`flex`, justifyContent:`center`, alignItems:`center`}}>Home</Link></li>
                        <li style={{height:`100%`, margin:0}}><Link to={"/author"} style={{color:`black`, fontFamily:`Crimson Text, serif`, height:`100%`, display:`flex`, justifyContent:`center`, alignItems:`center`}}>Authors</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}


export default Header
