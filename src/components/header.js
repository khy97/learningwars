import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import headerStyles from './header.module.css';
const Header = ({ siteTitle }) => (
  <div style={{
      background: `none`,
      marginBottom: `1.45rem`,
      // boxShadow: `0px 7px 10px -12px rgba(161,158,161,1)`,
      position:`fixed`,
      top:0,
      width: `100vw`,
      borderTop: `4px solid #ba3e32`
    }}
  >
    
    <div className={headerStyles.headerDiv}>
      <Link to='/' style={{margin:`auto`}}>
        <img src={require('../images/LearnWars.png')} alt=""  className={headerStyles.headerImg}/>
      </Link>
      <nav className={headerStyles.headerNav}>
        <ul className={headerStyles.headerList}>
          <li className={headerStyles.navItem}><Link to="/" style={{textDecoration:`none`, color:`white`}}>Home</Link></li>
          <li className={headerStyles.navItem}><Link to="/author" style={{textDecoration:`none`, color:`white`}}>Authors</Link></li>
          <li className={headerStyles.navItem}><Link to="/author" style={{textDecoration:`none`, color:`white`}}>Archive</Link></li>
          <li className={headerStyles.navItem}><Link to="/contact" style={{textDecoration:`none`, color:`white`}}>Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
