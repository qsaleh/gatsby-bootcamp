import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p>I am an Electrical Engineer turned software developer</p>
      <p>Need a developer? <Link to="/contact">Contact Me!</Link></p>
      <Footer />
    </div>
  )
}

export default AboutPage