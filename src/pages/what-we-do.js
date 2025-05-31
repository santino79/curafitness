import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class WWDo extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="What We Do"
          keywords={[`cura fitness`, `what we do`]}
        />

<div className="Hero WWDHero">
  <h1>What We Do</h1>
</div>


<div className="Column">
          <div className="MainContent">

            <div className="u-textLeft">
              <h2>What's going on at Cura Fitness?</h2>
              <p>
                We're preparing for our next chapter at Cura Fitness.
                <br /><br />
                Check back over the summer for more information on what's in store for Autumn / Winter 2025.
              </p>


            </div>


          </div>
        </div>

      </Layout>
    )
  }
}

export default WWDo

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
