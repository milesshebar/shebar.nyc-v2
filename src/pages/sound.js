import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  FaSpotify,
  FaApple,
  FaBandcamp,
  FaSoundcloud,
  FaArrowUp,
} from "react-icons/fa"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Sound"
        keywords={[
          `music`,
          `producer`,
          `audio engineer`,
          `scoring`,
          `soundtrack`,
          `mixing`,
        ]}
      />

      <article className="post-content page-template no-image">
        <h1 class="post-content-title">Sound</h1>
        <p class="post-content-excerpt">
          Producer, engineer and recording artist.
        </p>
        <p style={{ textAlign: "center" }}>
          Jump to section:
          <br />
          <a href="#albums">Albums</a> • <a href="#film">Film</a> •{" "}
          <a href="#theater">Theater</a>
        </p>

        <div className="post-content-body">
          <h2 id="albums">Albums</h2>

          <figure className="kg-image-card kg-width-full">
            <div className="row">
              <div className="col-4">
                <h3 id="solder">
                  <em>SOLDER</em>
                </h3>
                <Img
                  fluid={data.solder.childImageSharp.fluid}
                  className="kg-image"
                />
                <div className="row" id="logo_col">
                  <div className="col">
                    <a
                      href="https://soundcloud.com/milly_dollaz/sets/solder"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSoundcloud
                        style={{
                          color: "#f70",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://millydollaz.bandcamp.com/album/solder"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBandcamp
                        style={{
                          color: "#629aa9",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://geo.music.apple.com/us/album/_/1454604549?mt=1&app=music&at=1000lHKX"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaApple
                        style={{
                          color: "#A3AAAE",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://open.spotify.com/album/4Gw4Q3YBXI1nvA5eB6bGdO"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSpotify
                        style={{
                          color: "#1DB954",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <h3 id="force_quit">
                  <em>Force Quit</em>
                </h3>
                <Img
                  fluid={data.forceQuit.childImageSharp.fluid}
                  className="kg-image"
                />

                <div className="row" id="logo_col">
                  <div className="col">
                    <a
                      href="https://soundcloud.com/milly_dollaz/sets/force-quit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSoundcloud
                        style={{
                          color: "#f70",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://millydollaz.bandcamp.com/album/force-quit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBandcamp
                        style={{
                          color: "#629aa9",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://geo.music.apple.com/us/album/_/1377911752?mt=1&app=music&at=1000lHKX"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaApple
                        style={{
                          color: "#A3AAAE",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://open.spotify.com/album/3JpOAaaXahO1FL6WZgPdFv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSpotify
                        style={{
                          color: "#1DB954",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <h3 id="miles">
                  <em>mil e $</em>
                </h3>
                <Img
                  fluid={data.milesCover.childImageSharp.fluid}
                  className="kg-image"
                />

                <div className="row" id="logo_col">
                  <div className="col">
                    <a
                      href="https://soundcloud.com/milly_dollaz/sets/album"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSoundcloud
                        style={{
                          color: "#f70",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://millydollaz.bandcamp.com/album/mil-e"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBandcamp
                        style={{
                          color: "#629aa9",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://geo.music.apple.com/us/album/_/1318615528?mt=1&app=music&at=1000lHKX"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaApple
                        style={{
                          color: "#A3AAAE",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://open.spotify.com/album/5iI7AqPY6c3V7tqLfTe2O3?si=FtegS8FnQqGN63FG1I9uVw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSpotify
                        style={{
                          color: "#1DB954",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </figure>

          <p style={{ textAlign: "center" }}>
            {" "}
            <a href="#top">
              <FaArrowUp />
            </a>
          </p>

          <hr id="film" />

          <h2>Film</h2>
          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>SERIE III - PANAME IN LAVA</h3>
            <p className="client_subheading">
              Client:{" "}
              <strong>
                <a
                  href="https://studiofrowijn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Studio Frowijn
                </a>
              </strong>
            </p>
            <div className="video-embed">
              <iframe
                title="Studio Frowijn campaign video"
                src="https://player.vimeo.com/video/376330112?title=0&byline=0&portrait=0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="embedVideo-iframe iframe-child"
              ></iframe>
            </div>{" "}
            <script src="https://player.vimeo.com/api/player.js"></script>
            <figcaption></figcaption>
            <p>
              Composed music for campaign launch of Dutch artist and fashion
              designer Liselore Frowijn's latest collection.
            </p>
          </figure>
          <hr />

          <figure className="kg-card kg-image-card">
            <h3 id="islands">
              <em>Islands</em>
            </h3>
            <div className="video-embed">
              <iframe
                title="Ignas van Rijckevorsel's Islands film"
                src="https://player.vimeo.com/video/378517985?title=0&byline=0&portrait=0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="embedVideo-iframe iframe-child"
              ></iframe>
            </div>{" "}
            <script src="https://player.vimeo.com/api/player.js"></script>
            <figcaption></figcaption>
            <p>
              Director: <strong>Ignas van Rijckevorsel</strong>
            </p>
            <p>
              Composed soundtrack for Amsterdam-based artist Ignas van
              Rijckevorsel's film <em>Islands</em>. Exhibited at Bimhuis
              Amsterdam.
            </p>
          </figure>
          <hr />

          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>
              <em>Epic</em>
            </h3>
            <p className="client_subheading">
              Client:{" "}
              <strong>
                <a
                  href="https://kenyon.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kenyon College
                </a>
              </strong>
            </p>
            <div className="video-embed">
              <iframe
                title="Kenyon College's Epic campaign video"
                src="https://www.youtube.com/embed/s_HRTFms-hI"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="embedVideo-iframe iframe-child"
              ></iframe>
            </div>{" "}
            <script src="https://player.vimeo.com/api/player.js"></script>
            <figcaption></figcaption>
            <p>
              Composed, produced, mixed and mastered the soundtrack for this
              video, used in the 2019{" "}
              <a href="http://epic.kenyon.edu">
                <em>See Yourself</em> campaign
              </a>{" "}
              for prospective students.
            </p>
            <div className="row" id="logo_col">
              <div className="col">
                <a
                  href="https://soundcloud.com/milly_dollaz/stay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSoundcloud
                    style={{
                      color: "#f70",
                    }}
                  />
                </a>
              </div>
            </div>
          </figure>
          <p style={{ textAlign: "center" }}>
            {" "}
            <a href="#top">
              <FaArrowUp />
            </a>
          </p>

          <hr id="theater" />

          <h2>Theater</h2>

          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>
              <em>Bottle Fly</em>
            </h3>

            <Img
              fluid={data.bottleFly.childImageSharp.fluid}
              className="kg-image"
            />

            <figcaption></figcaption>
            <p>
              Director: <strong>Mackenna Goodrich</strong>
            </p>
            <p>
              Designed and mixed sound and music for Kenyon College's production
              of <em>Bottle Fly</em> by Jacqueline Goldfinger.
            </p>
          </figure>
          <hr />
          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>
              <em>Slowgirl</em>
            </h3>

            <Img
              fluid={data.slowgirl.childImageSharp.fluid}
              className="kg-image"
            />

            <figcaption></figcaption>
            <p>
              Director: <strong>Erica Christie</strong>
            </p>
            <p>
              Designed and mixed sound and music for Kenyon College's production
              of <em>Slowgirl</em> by Greg Pierce. Won Best Sound Design at the
              2019 Kenyon Tommy Awards.
            </p>
            <blockquote>
              <em>
                The sense of claustrophobia, created through a thick, layered
                soundscape of jungle noises, forced the [characters] to come out
                of hiding and communicate openly with each other.
              </em>
              <br />
              <br />
              <a
                style={{ float: "right" }}
                href="https://kenyoncollegian.com/arts/2018/11/a-jungle-gem-slowgirl-charms-audience-with-intimate-tale-of-forgiveness/"
                target="_blank"
                rel="noopener noreferrer"
              >
                — The Kenyon Collegian
              </a>
              <br />
            </blockquote>
          </figure>
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
    slowgirl: file(relativePath: { eq: "SLOWGIRL.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bottleFly: file(relativePath: { eq: "BOTTLEFLY.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    solder: file(relativePath: { eq: "solder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lB: file(relativePath: { eq: "lb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    songForYou: file(relativePath: { eq: "songforyou.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    forceQuit: file(relativePath: { eq: "forcequit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    islands: file(relativePath: { eq: "islands.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    milesCover: file(relativePath: { eq: "miles_cover.jpg" }) {
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
