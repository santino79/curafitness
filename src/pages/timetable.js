import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class TimeTable extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Class Timetable"
          keywords={[`cura fitness`, `timetable`, `classes`]}
        />

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">
            <h1>Timetable</h1>

            <img src="/images/CF_Timetable_October2019_v1.png" alt="Class Timetable" />

            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default TimeTable

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
