import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="body">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="layoutbody">
          {children}
        </div>
      </div>
    )}
  />
)

export default Layout
