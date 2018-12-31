import React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p style={{fontFamily: `Montserrat`}}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to='/' style={{textDecoration:`none`, color: `white`, width: 200, padding:`20px 0`, background:`#d9534f`, display:`block`, textAlign:`center`, borderRadius:4, boxShadow:`0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`, fontFamily:`Montserrat`}}>Go back Home</Link>
  </Layout>
)

export default NotFoundPage
