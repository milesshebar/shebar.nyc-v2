import React from "react"
import { Link } from "gatsby"
import {
  FaInstagram,
  FaImdb,
  FaLinkedinIn,
  FaTheaterMasks,
  FaGithub,
} from "react-icons/fa"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    easing: "easeInOutCubic",
  })
}

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#top`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link
                  activeStyle={{ opacity: 1 }}
                  to="/"
                  activeClassName="nav-current"
                >
                  Home
                </Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link activeStyle={{ opacity: 1 }} to={`/about`}>
                  About
                </Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link activeStyle={{ opacity: 1 }} to={`/video`}>
                  Video
                </Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link activeStyle={{ opacity: 1 }} to={`/sound`}>
                  Sound
                </Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link activeStyle={{ opacity: 1 }} to={`/web`}>
                  Web
                </Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              shebar.nyc
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.instagram.com/milesshebar"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://imdb.me/milesshebar"
                title="IMDB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaImdb />
              </a>
              <a
                href="https://linkedin.com/in/milesshebar"
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/milesshebar"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://milesshebar.com"
                title="Acting"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTheaterMasks />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} &mdash; <Link to={`/`}>{title}</Link>
      </footer>
    </div>
  )
}

export default Layout
