import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typed from "react-typed"

import { FaArrowUp } from "react-icons/fa"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[`about`, `miles shebar`, `contact`, `info`]}
      />
      <article className="post-content page-template no-image">
        <h1 class="post-content-title ">About</h1>
        <p class="post-content-excerpt">
          <Typed
            strings={[
              "I dream in After Effects expressions.",
              "I've built computers for fun.",
              "I've been editing video since I was 4.",
              "I design responsive, sleek websites.",
              "I make a mean pitch deck.",
              "I'll talk your ear off about the NYC subway if you let me.",
              "I don't <em>like</em> Wikipedia, I <em><strong>need</strong></em> it.",
            ]}
            typeSpeed={40}
            backSpeed={20}
            backDelay={1500}
            loop
          />
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          Jump to section:
          <br />
          <a href="#contact">Contact</a>
        </p>
        <div className="post-content-body">
          <figure className="kg-card kg-image-card kg-width-wide" id="me">
            <div class="row">
              <div className="col-6">
                <h3>.jpg</h3>
                <Img
                  fluid={data.profile.childImageSharp.fluid}
                  className="kg-image"
                />
              </div>
              <div className="col-6">
                <h3>.txt</h3>
                <p>
                  <strong>Miles Shebar</strong> is a new media artist from New
                  York City and recent graduate of Kenyon College, where he
                  majored in Studio Art with concentrations in Computer Science
                  and Humane Studies. His work employs code, video, design,
                  sound, and sculpture to explore our relationships to
                  technology and the Internet.
                </p>
                <p>
                  He also has years of professional experience working freelance
                  and in house, on both the production and agency sides.
                </p>
                <p>
                  Feel free to <a href="#contact">reach out</a> to discuss
                  opportunities.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h3>current stop</h3>
                <a
                  href="https://goo.gl/maps/asMDdG4m32tV4oMXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <figure
                    className="subway-sign "
                    style={{ padding: "1rem", backgroundColor: "black" }}
                  >
                    <h4
                      style={{
                        margin: "0 auto",
                        lineHeight: "100%",
                        width: "720px",
                        textAlign: "left",
                        color: "white",
                        fontFamily:
                          "'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
                        paddingLeft: ".5em",
                      }}
                    >
                      110 Street
                      <br />
                      Cathedral Pkwy
                      <br />
                      Station
                    </h4>
                    <div
                      className="row"
                      style={{
                        margin: "0 auto",
                        width: "720px",
                        paddingLeft: ".5em",
                      }}
                    >
                      <Img
                        fluid={data.B.childImageSharp.fluid}
                        className="subway-image"
                        style={{ float: "left" }}
                      />

                      <Img
                        fluid={data.C.childImageSharp.fluid}
                        className="subway-image"
                      />
                    </div>
                  </figure>
                </a>{" "}
                <figure
                  className="kg-card kg-image-card"
                  style={{ textAlign: "center" }}
                >
                  <h3>resume</h3>

                  <a
                    href="../Miles_Shebar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button primary"
                  >
                    Download
                  </a>
                </figure>
                {/*<h3>live employment status</h3>

                <figure
                    
                    style={{ padding: "1rem", backgroundColor: "black" }}
                  >
                    <h3
                      style={{
                        margin: "0 auto",
                        lineHeight: "100%",
                        width: "720px",
                        textAlign: "left",
                        color: "white",
                        fontFamily: "'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
                        paddingLeft: ".5em",
                      }}
                    >
                     
                     <FaCheck style={{color:"lightgreen"}}/>{'  '}Unemployed!
                    </h3></figure>*/}
              </div>

              <div className="col-6 subway-sign">
                <h3>software</h3>
                <div className="row">
                  <div className="col" style={{ textAlign: "right" }}>
                    Adobe Creative Cloud
                  </div>
                  <div className="col">
                    {" "}
                    <progress
                      style={{
                        float: "left",
                        width: "50%",
                        marginTop: ".5rem",
                      }}
                      max="100"
                      value="95"
                    ></progress>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={{ textAlign: "right" }}>
                    Ableton Live
                  </div>
                  <div className="col">
                    {" "}
                    <progress
                      style={{
                        float: "left",
                        width: "50%",
                        marginTop: ".5rem",
                      }}
                      max="100"
                      value="90"
                    ></progress>
                  </div>
                </div>

                <div className="row">
                  <div className="col" style={{ textAlign: "right" }}>
                    HTML/CSS/JS
                  </div>
                  <div className="col">
                    {" "}
                    <progress
                      style={{
                        float: "left",
                        width: "50%",
                        marginTop: ".5rem",
                      }}
                      max="100"
                      value="75"
                    ></progress>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={{ textAlign: "right" }}>
                    Linux
                  </div>
                  <div className="col">
                    {" "}
                    <progress
                      style={{
                        float: "left",
                        width: "50%",
                        marginTop: ".5rem",
                      }}
                      max="100"
                      value="70"
                    ></progress>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={{ textAlign: "right" }}>
                    node.js
                  </div>
                  <div className="col">
                    {" "}
                    <progress
                      style={{
                        float: "left",
                        width: "50%",
                        marginTop: ".5rem",
                      }}
                      max="100"
                      value="60"
                    ></progress>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={{ textAlign: "right" }}>
                    Rhino / Cinema 4D
                  </div>
                  <div className="col">
                    {" "}
                    <progress
                      style={{
                        float: "left",
                        width: "50%",
                        marginTop: ".5rem",
                      }}
                      max="100"
                      value="30"
                    ></progress>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={{ textAlign: "right" }}>
                    Arduino
                  </div>
                  <div className="col">
                    {" "}
                    <progress
                      style={{
                        float: "left",
                        width: "50%",
                        marginTop: ".5rem",
                      }}
                      max="100"
                      value="30"
                    ></progress>
                  </div>
                </div>
              </div>
            </div>
          </figure>

          <br />
          <form
            action="https://formspree.io/xqkyebwa"
            method="POST"
            className="contactForm post-content col-6"
            id="contact"
          >
            <h2 style={{ textAlign: "center" }}>Contact</h2>
            <p style={{ textAlign: "center" }}>
              Let's chat. Shoot me an email and I'll be in touch.
            </p>
            <label>
              <span style={{ color: "rgb(69, 69, 69)" }}>your email:</span>
              <input type="email" name="_replyto" required />
            </label>
            <br />
            <label>
              <span style={{ color: "rgb(69, 69, 69)" }}>message:</span>
              <textarea name="message" required></textarea>
            </label>

            <button type="submit">Send</button>
          </form>
          <p style={{ textAlign: "center" }}>
            {" "}
            <a href="#top">
              <FaArrowUp />
            </a>
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    A: file(relativePath: { eq: "A.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    B: file(relativePath: { eq: "B.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    C: file(relativePath: { eq: "C.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    D: file(relativePath: { eq: "D.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    E: file(relativePath: { eq: "E.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
