import React from 'react';
// import authorStyles from './author.module.css';
import { Link } from 'gatsby';

class AuthorTemplate extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         x:null
    //     }
    // }

    // componentDidMount() {
    //     var x = this.state.x
    //     x = window.matchMedia("(max-width: 700px)")
    //     this.myFunction(x) // Call listener function at run time
    //     x.addListener(this.myFunction) // Attach listener function on state changes 
    //     this.setState({x})
    // }
    
    // componentWillUnmount() {
    //     this.state.x.removeListener(this.myFunction) // Attach listener function on state changes 
    //     this.setState({x:null})
    // }
    
    // myFunction = (x) => {
    //     if (x.matches) { // If media query matches
    //         document.getElementById("authorcard").classList.remove("horizontal")
    //         document.getElementById("authorcard").classList.remove("small")
    //     } else {
    //         document.getElementById("authorcard").classList.add("horizontal")
    //         document.getElementById("authorcard").classList.add("small")
    //     }
    // }

    render() {
        return (           
            <div className="container">
                <div className="row">
                    <h1 style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`}} className="center-align">Here are your Authors</h1>
                </div>
                <div className="row" id={this.props.authorName.split(" ").join('_')}>
                    <div className="col s12 m6 l4 offset-m3 offset-l4">
                        <div className="card" style={{boxShadow:`none`}}>
                            <div className="card-image">
                                <img src={require(`../images/${this.props.authorName}.jpg`)} alt="" className="responsive-img" style={{padding:0, margin:0}}/>
                            </div>
                            <div class="card-content" style={{padding:`15px 5px`}}>
                                <p style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, fontSize:24, paddingBottom:15}}>{this.props.authorName}</p>
                                <p style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, fontSize:12, paddingBottom:10}}>{this.props.authorTag}</p>
                                <p style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, fontSize:12,}}>{this.props.authorDesc}</p>
                            </div>
                            <div class="card-action" style={{padding:`10px 5px`}}>
                                <Link style={{fontFamily:`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`, textAlign:`center`}} to={`/author-blogs/${this.props.authorName.split(" ").join('_')}`} className="blue-text text-darken-2">Read More Articles</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthorTemplate;
