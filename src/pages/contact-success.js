import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Message Sent Successfully"
          keywords={[`cura fitness`, `contact`]}
        />

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
            <h1>Message Sent Successfully.</h1>

              <h2>Thanks! We'll get back to you soon.</h2>

              <h3>Company Information</h3>
                <em>
                Cura Fitness Ltd is a limited company registered in Northern Ireland (Company Reg No: NI653208).
                <br />
                Our registered office is 20 Upper Water St, Newry BT34 1DJ
                </em>

            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default ContactIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
