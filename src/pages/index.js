import * as React from "react"
import { Link } from "gatsby"
import Nav from '../components/nav'
import Featured from '../components/featured'
import Home from '../components/home'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './index.css'
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav/>
    <Featured/>
    <Home/>
    <Link to= '/blog' className='viewmore'>View More</Link>
    <Footer/>
    </Layout>
)

export default IndexPage
