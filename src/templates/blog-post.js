import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>

          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <div>
            <h4>{post.frontmatter.Video} : Video</h4>
          </div>
          <div>
            <h4>{post.frontmatter.draft}</h4>
          </div>
          <div>
            <h4>{post.frontmatter.galleryImages}</h4>
          </div>
          <div>
            <h4>{post.frontmatter.tags}</h4>
          </div>
          <div>
            <h4>{post.frontmatter.youtube}</h4>
          </div>
          <div>
            <img src={post.frontmatter.image.image} alt={post.frontmatter.image.alt} />
          </div>
          
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <video src={post.frontmatter.Video}></video>
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
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
        Video
        image{
          alt
          image
        }
        draft
        galleryImages
        tags
        
        youtube
      }
    }
  }
`
