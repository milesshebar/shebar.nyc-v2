import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaArrowUp, FaChevronRight, FaChevronLeft } from "react-icons/fa"

class BlogPostTemplate extends React.Component {
  render() {
    const { previous, next } = this.props.pageContext
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <nav className="prev-next-links">
          {next && (
            <Link id="next" to={next.fields.slug}>
              <span>
                <FaChevronLeft />
              </span>
            </Link>
          )}
          {previous && (
            <Link id="prev" to={previous.fields.slug}>
              <span>
                <FaChevronRight />
              </span>
            </Link>
          )}
        </nav>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>
          </header>

          {post.frontmatter.description && (
            <p class="post-content-excerpt">{post.frontmatter.description}</p>
          )}

          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          {post.frontmatter.materials && (
            <p className="kg-card" style={{ textAlign: "center" }}>
              <strong>Tools</strong>: {post.frontmatter.materials}
            </p>
          )}
          <p style={{ textAlign: "center" }}>
            {" "}
            <a href="#top">
              <FaArrowUp />
            </a>
          </p>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        materials
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
