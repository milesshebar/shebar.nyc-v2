import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaArrowUp } from "react-icons/fa"

import VideoTest from "../../content/assets/video/color_large.mp4"
import ColorDetail from "../../content/assets/color_install.jpg"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Web"
        keywords={[`web designer`, `web developer`, `portfolio`]}
      />

      <article className="post-content page-template no-image">
        <h1 class="post-content-title">Web</h1>
        <p class="post-content-excerpt">
          Designer and developer.
        </p>
        <div className="post-content-body">
          <figure className="kg-card kg-image-card ">
            <Img
              fluid={data.siteArt.childImageSharp.fluid}
              className="kg-image"
              alt="Homepage of seniorartexhibitionkenyon.com"
            />

            <figcaption></figcaption>
            <h6>
              <a
                href="https://seniorartexhibitionkenyon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                seniorartexhibitionkenyon.com
              </a>{" "}
            </h6>

            <p>
              Virtual gallery designed to promote the work of Kenyon's senior
              Studio Art majors, after our physical end-of-semester show was
              canceled due to COVID-19.
            </p>
            <span className="site_metadata">
              Gatsby, markdown
              <br />
              2020
            </span>
          </figure>
          <hr />
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.siteMGS.childImageSharp.fluid}
              className="kg-image"
              alt="Homepage of milesshebar.com"
            />

            <figcaption></figcaption>
            <h6>
              <a
                href="https://milesshebar.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                milesshebar.com
              </a>{" "}
            </h6>

            <p>My acting portfolio website.</p>
            <span className="site_metadata">
              Gatsby, markdown
              <br />
              2020
            </span>
          </figure>
          <hr />
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.siteSandy.childImageSharp.fluid}
              className="kg-image"
              alt="Homepage of sandydelissovoy.com"
            />

            <figcaption></figcaption>
            <h6>
              <a
                href="https://sandydelissovoy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                sandydelissovoy.com
              </a>{" "}
            </h6>

            <p>
              Sandy de Lissovoy is an artist and teacher working with sculpture
              and installation. I worked with him to design and deploy a new
              responsive website to showcase his work.{" "}
            </p>
            <span className="site_metadata">
              Cargo
              <br />
              2019
            </span>
          </figure>
          <hr />
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.siteTB.childImageSharp.fluid}
              className="kg-image"
              alt="Homepage of trumpbites.com"
            />

            <figcaption></figcaption>
            <h6>
              <a
                href="https://trumpbites.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                trumpbites.com
              </a>{" "}
            </h6>

            <p>
              <em>Trump Bites</em> are short animated films based on actual
              Donald Trump audio clips, hand-drawn by legendary cartoonist Bill
              Plympton. I created the website and designed materials for
              promotion of the series via print, web, and social.{" "}
            </p>
            <span className="site_metadata">
              Bulma
              <br />
              2018
            </span>
          </figure>
          <hr />
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.site110.childImageSharp.fluid}
              className="kg-image"
              alt="Homepage of 110thstreet.com"
            />

            <figcaption></figcaption>
            <h6>
              <a
                href="https://110thstreet.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                110thstreet.com
              </a>{" "}
            </h6>

            <p>
              Website for 110th Street Films, a new independent production
              company.
            </p>
            <span className="site_metadata">
              Bulma
              <br />
              2018
            </span>
          </figure>
          <hr />
          <figure className="kg-card kg-image-card">
            <video
              autoPlay
              muted
              loop
              style={{ margin: "0 auto", width: "100%", display: "block" }}
            >
              <source src={VideoTest} type="video/mp4" />
            </video>

            <figcaption>
              <em>Color</em> <span style={{ fontWeight: "200" }}>2017</span>
            </figcaption>
            <h6>
              <a href="https://color-v2.glitch.me">
                <em>COLOR</em>
              </a>{" "}
            </h6>

            <p>
              An{" "}
              <a href={ColorDetail} target="_blank" rel="noopener noreferrer">
                interactive installation
              </a>{" "}
              that invited users to text the name of a color to a phone number.
              The color they picked then became the color of the entire webpage.
              View a demo{" "}
              <a
                href="https://color-v2.glitch.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              , and control it from{" "}
              <a
                href="http://shebar.xyz/color"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <span className="site_metadata">node.js, socket.io, twilio</span>
          </figure>{" "}
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
    site110: file(relativePath: { eq: "site_110.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kokoflow: file(relativePath: { eq: "kokoflow.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    siteArt: file(relativePath: { eq: "site_art.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    siteMGS: file(relativePath: { eq: "site_mgs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    siteSandy: file(relativePath: { eq: "site_sandy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    siteTB: file(relativePath: { eq: "site_tb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    color: file(relativePath: { eq: "color_install.jpg" }) {
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
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
