import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaArrowUp } from "react-icons/fa"

import VideoTest from "../../content/assets/video/coc_casestudy.mp4"
import FelixDaHousecat from "../../content/assets/video/felixdahousecat.mp4"
import LeeFoss from "../../content/assets/video/leefoss.mp4"
import WizDaddyKat from "../../content/assets/video/wizdaddykat.mp4"
import Worthy from "../../content/assets/video/worthy.mp4"
import DirtyLemon from "../../content/assets/video/dirtylemon.mp4"
import Bulleit from "../../content/assets/video/bulleit.mp4"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Video"
        keywords={[`vfx`, `motion graphics`, `motion`, `editing`, `commercial`]}
      />

      <article className="post-content page-template no-image">
        <h1 class="post-content-title">Video</h1>
        <p class="post-content-excerpt">
          Editor, digital compositor, and motion graphics artist.
        </p>
        <p style={{ textAlign: "center" }}>
          Jump to section:
          <br />
          <a href="#motion-graphics">Motion Graphics</a> •{" "}
          <a href="#vfx">VFX</a> • <a href="#editing">Editing</a> •{" "}
          <a href="#independent">Independent</a>
        </p>
        <div className="post-content-body">
          <h2 id="motion-graphics">Motion Graphics</h2>
          <figure className="kg-card kg-image-card ">
            <h3>
              <em>Dirty Secrets</em>
            </h3>
            <p className="client_subheading">
              Client:{" "}
              <strong>
                <a
                  href="https://dirtylemon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dirty Lemon
                </a>
              </strong>
            </p>
            <video
              autoPlay
              muted
              loop
              style={{ margin: "0 auto", width: "100%", display: "block" }}
            >
              <source src={DirtyLemon} type="video/mp4" />
            </video>
            <figcaption></figcaption>

            <p>
              Created Windows 98-inspired titlecards for Dirty Lemon IGTV
              series.
            </p>
          </figure>
          <hr />

          <figure className="kg-card kg-image-card">
            <h3>
              Bulleit Bourbon <em>Tattoo Edition</em>
            </h3>
            <p className="client_subheading">
              Client:{" "}
              <strong>
                <a
                  href="http://bartonfgraf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Barton F. Graf
                </a>
              </strong>
              , for{" "}
              <strong>
                <a
                  href="http://diageo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diageo
                </a>
              </strong>
            </p>
            <video
              autoPlay
              muted
              loop
              style={{ margin: "0 auto", width: "100%", display: "block" }}
            >
              <source src={Bulleit} type="video/mp4" />
            </video>
            <br />
            <div class="row">
              <div class="col-6">
                <div className="video-embed">
                  <iframe
                    src="https://player.vimeo.com/video/289715844?title=0&byline=0&portrait=0"
                    allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    title="Bulliet Bourbon NYC Ad"
                    allowfullscreen
                    className="embedVideo-iframe iframe-child"
                  ></iframe>
                </div>{" "}
                <script src="https://player.vimeo.com/api/player.js"></script>
                <figcaption style={{ textAlign: "center" }}>NYC</figcaption>
              </div>

              <div class="col-6">
                <div className="video-embed">
                  <iframe
                    src="https://player.vimeo.com/video/289715539?title=0&byline=0&portrait=0"
                    allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    title="Bulliet Bourbon Portland Ad"
                    allowfullscreen
                    className="embedVideo-iframe iframe-child"
                  ></iframe>
                </div>{" "}
                <script src="https://player.vimeo.com/api/player.js"></script>
                <figcaption style={{ textAlign: "center" }}>PDX</figcaption>
              </div>
            </div>
            <figcaption></figcaption>

            <p>
              Contributed to creative development on the Tattoo Edition
              campaign, creating motion graphic concept art, pitch decks, in
              situs, and numerous layouts.
            </p>
          </figure>
          <hr />

          <figure className="kg-card kg-image-card">
            <h3>
              Clash of Clans <em>The Builder</em>
            </h3>
            <p className="client_subheading">
              Client:{" "}
              <strong>
                <a
                  href="http://bartonfgraf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Barton F. Graf
                </a>
              </strong>
              , for{" "}
              <strong>
                <a
                  href="http://supercell.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supercell
                </a>
              </strong>
            </p>
            <video
              autoPlay
              muted
              loop
              style={{ margin: "0 auto", width: "100%", display: "block" }}
            >
              <source src={VideoTest} type="video/mp4" />
            </video>
            <figcaption></figcaption>

            <p>
              Designed motion graphics for{" "}
              <a
                href="https://clios.com/entertainment/winner/games-integrated-campaign/supercell-clash-of-clans/clash-of-clans-game-52320"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clios Case Study video
              </a>
              .
            </p>
          </figure>
          <hr />

          <figure className="kg-card kg-image-card">
            <h3>
              1 OAK <em>Invitations</em>
            </h3>
            <p className="client_subheading">
              Client:{" "}
              <strong>
                <a
                  href="http://buttergroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Butter Group
                </a>
              </strong>
            </p>
            <div className="row">
              <div className="col-6">
                <video
                  autoPlay
                  muted
                  preload="auto"
                  loop
                  style={{ margin: "0 auto", width: "100%", display: "block" }}
                >
                  <source src={LeeFoss} type="video/mp4" />
                </video>
                <figcaption>
                  <em>Lee Foss</em>{" "}
                  <span style={{ fontWeight: "200" }}>2017</span>
                </figcaption>
              </div>
              <div className="col-6">
                <video
                  autoPlay
                  muted
                  preload="auto"
                  loop
                  style={{ margin: "0 auto", width: "100%", display: "block" }}
                >
                  <source src={Worthy} type="video/mp4" />
                </video>
                <figcaption>
                  <em>Worthy</em>{" "}
                  <span style={{ fontWeight: "200" }}>2017</span>
                </figcaption>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <video
                  autoPlay
                  muted
                  preload="auto"
                  loop
                  style={{ margin: "0 auto", width: "100%", display: "block" }}
                >
                  <source src={WizDaddyKat} type="video/mp4" />
                </video>
                <figcaption>
                  <em>DJ Daddykat</em>{" "}
                  <span style={{ fontWeight: "200" }}>2017</span>
                </figcaption>
              </div>

              <div className="col-6">
                <video
                  autoPlay
                  muted
                  preload="auto"
                  loop
                  style={{ margin: "0 auto", width: "100%", display: "block" }}
                >
                  <source src={FelixDaHousecat} type="video/mp4" />
                </video>
                <figcaption>
                  <em>Felix Da Housecat</em>{" "}
                  <span style={{ fontWeight: "200" }}>2017</span>
                </figcaption>
              </div>
            </div>
            <p>
              Art Direction: <strong>Teddy Ouwerkerk</strong>
            </p>
            <p>
              Designed dozens of animations to promote events at The Butter
              Group's properties, including Up & Down, 1 OAK New York, 1 OAK Los
              Angeles, and 1 OAK Maldives.
            </p>
          </figure>
          <hr />

          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>
              Giraffage <em>Bring Me Your Love</em>
            </h3>
            <p className="client_subheading">
              Client:{" "}
              <strong>
                <a
                  href="http://foolsgoldrecs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fool's Gold Records
                </a>
              </strong>
            </p>
            <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/8SAt6SQwDeQ"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="Giraffage Bring Me Your Love video"
                allowfullscreen
                className="embedVideo-iframe iframe-child"
              ></iframe>
            </div>{" "}
            <figcaption></figcaption>
            <p>
              Art Direction: <strong>Uncle and Prophet</strong>
            </p>
            <p>
              Animated album art for Giraffage’s single{" "}
              <em>Bring Me Your Love</em>. Developed versions for Instagram,
              YouTube, and projections at Giraffage’s live shows.
            </p>
          </figure>
          <hr />

          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>
              <em>Solitary Minds</em>
            </h3>
            <div className="video-embed">
              <iframe
                title="Excerpt from Solitary Minds"
                src="https://www.youtube.com/embed/N6hEQX8SI20"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="embedVideo-iframe iframe-child"
              ></iframe>
            </div>{" "}
            <figcaption></figcaption>
            <p>
              Director: <strong>Moira Fett</strong>
              <br />
            </p>
            <p>
              Designed infographics and kinetic typography for a Kenyon thesis
              film about prisoners in the Allan B. Polunsky Unit, a solitary
              confinement and death row facility in Texas.
            </p>
          </figure>
          <hr />

          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>2017 Motion Graphics Reel</h3>
            <div className="video-embed">
              <iframe
                title="My 2017 Motion Graphic reel"
                src="https://www.youtube.com/embed/chUZ3r4v6m0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="embedVideo-iframe iframe-child"
              ></iframe>
            </div>{" "}
            <figcaption></figcaption>
            <p>
              Reel of my early motion design work, primarily for Fool's Gold
              Records.
            </p>
          </figure>
          <p style={{ textAlign: "center" }}>
            {" "}
            <a href="#top">
              <FaArrowUp />
            </a>
          </p>

          <hr id="vfx" />

          <h2>VFX </h2>
          {/* <figure className="kg-card kg-image-card kg-width-wide">
            <h3>
              <em>Gotta Get Down To It</em>
            </h3>
            <div class="row">
              <div class="col-6">
                <Img
                  fluid={data.gotta.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>Before</figcaption>
              </div>
              <div class="col-6">
                <Img
                  fluid={data.gotta2.childImageSharp.fluid}
                  className="kg-image"
                />
                <figcaption>After</figcaption>
              </div>
            </div>
          </figure>
          <p>
            Director: <strong>Jonathan Tazewell</strong>
          </p>
          <p>
            Screen comp work for <em>Gotta Get Down To It</em>.
          </p>
          <hr />*/}

          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>
              <em>Backyard Wilderness</em>
            </h3>
            <p className="client_subheading">
              Client:{" "}
              <strong>
                <a
                  href="http://www.archipelagofilms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Archipelago Films
                </a>
              </strong>
            </p>
            <div className="video-embed">
              <iframe
                title="Trailer for Backyard Wilderness"
                src="https://www.youtube.com/embed/y1Z4mmn3YzE"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="embedVideo-iframe iframe-child"
              ></iframe>
            </div>{" "}
            <figcaption>Trailer</figcaption>
            <p>
              Performed post-production tasks like planar tracking, compositing,
              and screen compositing on multiple shots for Backyard Wilderness,
              delivering finals in 8K ACES colorspace.
            </p>
            <p>
              Created motion graphics that were used for screen composites in
              the final film. In one shot, I animated an iPhone Instagram feed
              that responded to the actress's improvised taps, and tracked and
              composited it onto her prop phone.
            </p>
          </figure>
          <hr />

          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>
              AT&T x Red Bull Racing <em>Speed and Precision</em>
            </h3>
            <p className="client_subheading">
              Client:{" "}
              <strong>
                <a
                  href="http://framestore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Framestore
                </a>
              </strong>
              , for{" "}
              <strong>
                <a
                  href="http://bbdo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BBDO
                </a>
              </strong>
            </p>
            <div className="video-embed">
              <iframe
                title="ATT/Red Bull Ad"
                src="https://www.youtube.com/embed/8g4XI_WITbQ"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="embedVideo-iframe iframe-child"
              ></iframe>
            </div>{" "}
            <figcaption></figcaption>
            <p>
              Performed paint/roto and compositing tasks to digitally change the
              paint job of one of the cars, since actual cars shot were
              identical. Added crowds, removed markers, tracked camera motion
              for set replacement.
            </p>
          </figure>
          <p style={{ textAlign: "center" }}>
            {" "}
            <a href="#top">
              <FaArrowUp />
            </a>
          </p>

          <hr id="editing" />

          <h2>Editing</h2>
          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>
              <em>Humans of New York: The Series</em>
            </h3>
            <p className="client_subheading">
              Client:{" "}
              <strong>
                <a
                  href="https://www.facebook.com/humansofnewyork/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Humans of New York
                </a>
              </strong>
            </p>
            <div className="video-embed">
              <iframe
                title="Humans of NY The Series trailer"
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fhonytheseries%2Fvideos%2F359841454517564%2F&show_text=0&width=560"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="embedVideo-iframe iframe-child"
              ></iframe>
            </div>
            <figcaption></figcaption>
            <p>
              Assistant editor on <em>Humans of New York: The Series</em> from
              its inception in 2014 to its premiere on Facebook Watch in 2017.
              My tasks included importing & logging daily footage, preparing
              offlines & b-roll sequences, and creating highlight reels.{" "}
            </p>
            <p>
              The series was a 2018 Emmy nominee in the Outstanding New
              Approaches: Arts, Lifestyle, and Culture category.
            </p>
          </figure>
          <p style={{ textAlign: "center" }}>
            {" "}
            <a href="#top">
              <FaArrowUp />
            </a>
          </p>

          <hr id="independent" />
          <h2>Independent</h2>
          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>
              <em>Trump L'Oeil</em>
            </h3>
            <div className="video-embed">
              <iframe
                title="Trump L'Oeil on Youtube"
                src="https://www.youtube.com/embed/nvROok9WO5U"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="embedVideo-iframe iframe-child"
              ></iframe>
            </div>{" "}
            <figcaption></figcaption>
            <p>
              Two-dimensional stop-motion short film created for Kenyon's ARTS
              361: Stop Motion class.
            </p>
          </figure>
          <hr />

          <figure className="kg-card kg-image-card gatsby-resp-iframe-wrapper">
            <h3>
              <em>Exacerbate</em>
            </h3>
            <div className="video-embed">
              <iframe
                title="Exacerbate on youtube"
                src="https://www.youtube.com/embed/8NKL6JGuZsk"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="embedVideo-iframe iframe-child"
              ></iframe>
            </div>{" "}
            <figcaption></figcaption>
            <p>
              Music video for my song <em>Exacerbate</em>, from my EP{" "}
              <em>Force Quit</em>.
            </p>
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
    gotta: file(relativePath: { eq: "gotta1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gotta2: file(relativePath: { eq: "gotta2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
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
