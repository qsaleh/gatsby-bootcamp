import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

const AboutPage = () => {
  return (
      <Layout>
      <h1>About Me</h1>
      <p>I am an Electrical Engineer turned software developer</p>
      <p>Need a developer? <Link to="/contact">Contact Me!</Link></p>
      </Layout>
  )
}

export default AboutPage