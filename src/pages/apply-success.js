import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ApplyIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Application Sent Successfully"
          keywords={[`female`, `fitness`, `studio`, `gym`, `apply`, `bootcamp`]}
        />

        <div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
            <h1>Application Sent Successfully.</h1>

              <p>
                  Your application for a Bootcamp slot has been sent successfully.
                  <br /><br />
                  We will review all applications and get back to you as soon as possible.
                  <br /><br />
                  Thanks!
              </p>

              <h3>Company Information</h3>
              <em>Cura Fitness Ltd is a limited company registered in Northern Ireland (Company Reg No: NI653208).
                    <br />
                    Our registered office is 20 Upper Water St, Newry BT34 1DJ</em>

            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default ApplyIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`