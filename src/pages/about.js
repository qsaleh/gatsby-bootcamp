import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I am an Electrical Engineer turned software developer</p>
      <p>Need a developer? <Link to="/contact">Contact Me!</Link></p>
    </div>
  )
}

export default AboutPage