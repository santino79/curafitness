import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class PersTrn extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Personal Training"
          keywords={[`cura fitness`, `personal training`]}
        />

<div className="Hero PTHero">
  <h1>Personal Training</h1>
</div>

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">

            <img src="/images/Cura_PT_Pckgs_Jan19_WEBv00.04.png" alt="Cura Fitness personal training packages" />


              <h2>Interested in finding out more?</h2>

            <a href="/contact/" className="goldbutton">Book Your FREE Consultation Today</a>

            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default PersTrn

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
