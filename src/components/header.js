import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import headerStyles from './header.module.css';

class Header extends React.Component {
  componentDidMount() {
    const links = document.querySelectorAll(".navItemLink");
    // var self = this;
    links.forEach(link => {
      links.forEach(l => {
        l.classList.remove('navActive');
      })

      link.addEventListener('click', function(e) {
        console.log(e);
      });
    })
  }

  render() {
    return (
        <div className={headerStyles.headerMainDiv} >    
        <div className={headerStyles.headerDiv}>
          <Link to='/'>
            <img src={require('../images/LearnWars.png')} alt=""  className={headerStyles.headerImg}/>
          </Link>
          <nav className={headerStyles.headerNav}>
            <ul className={headerStyles.headerList}>
              <li className={headerStyles.navItem}><Link to="/" className={headerStyles.navItemLink} style={{textDecoration:`none`}}>Home</Link></li>
              <li className={headerStyles.navItem}><Link to="/author" className={headerStyles.navItemLink} style={{textDecoration:`none`}}>Authors</Link></li>
              {/* <li className={headerStyles.navItem}><Link to="/author" style={{textDecoration:`none`}}>Archive</Link></li> */}
              {/* <li className={headerStyles.navItem}><Link to="/contact" className={headerStyles.navItemLink} style={{textDecoration:`none`}}>Contact Us</Link></li> */}
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
