import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ApplyBoot extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Apply For Bootcamp"
          keywords={[`female`, `fitness`, `studio`, `gym`, `apply`, `bootcamp`]}
        />

<div className="Hero HomeHero">
  <h1>Apply For Bootcamp</h1>
</div>


<div className="Column">
          <div className="MainContent">

            <div className="u-textLeft">

                <h2>Bootcamp Application Window is now CLOSED.</h2>
                The application process for our January 2020 Bootcamp is now <strong>CLOSED</strong>.
                <br /><br />
                Our next bootcamp application window will open in February 2020.
                
                <h3>What is Bootcamp?</h3>
                Find out more about <a href="/bootcamp/" target="_blank" rel="noopener noreferrer">Bootcamp at Cura Fitness</a>.
                
                <br /><br />
                <a href="/contact/" className="goldbutton">Register Interest In Our Next Bootcamp</a>

            </div>

          </div>
        </div>

      </Layout>
    )
  }
}

export default ApplyBoot

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
