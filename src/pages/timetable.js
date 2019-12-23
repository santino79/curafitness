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

<div className="Hero ContactHero">
  <h1>Timetable</h1>
</div>

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">

            <h2>JANUARY 2020 CLASS TIMETABLE</h2>

            <a href="https://members.curafitness.com" target="_blank" className="goldbutton">Members Log-In</a>


            <div className="row">
              <div className="col-4">
                <h3>MONDAY</h3>
                <div className="tt-cell"><strong>5.45AM - 6.15AM</strong><br />RT24 HIIT</div>
                <div className="tt-cell"><strong>9.30AM - 10AM</strong><br />Cura HIIT</div>
                <div className="tt-cell"><strong>5.45PM - 6.30PM</strong><br />Cura HIIT + Ab Blast</div>
                <div className="tt-cell"><strong>6.30PM - 7.15PM</strong><br />RT24 HIIT + Ab Blast</div>
                <div className="tt-cell"><strong>7.30PM - 8PM</strong><br />Cura HIIT</div>
              </div>
              <div className="col-4">
              <h3>TUESDAY</h3>
                <div className="tt-cell"><strong>9.30AM - 10AM</strong><br />RT24 HIRT</div>
                <div className="tt-cell"><strong>6.15PM - 6.45PM</strong><br />RT24 HIRT</div>
                <div className="tt-cell"><strong>7PM - 7.45PM</strong><br />Boxfit Circuits + Ab Blast</div>
              </div>
              <div className="col-4">
              <h3>WEDNESDAY</h3>
                <div className="tt-cell"><strong>5.45AM - 6.15AM</strong><br />Circuits</div>
                <div className="tt-cell"><strong>9.30AM - 10AM</strong><br />Circuits</div>
                <div className="tt-cell"><strong>5.45PM - 6.30PM</strong><br />Circuits + Core</div>
                <div className="tt-cell"><strong>6.30PM - 7.15PM</strong><br />Circuits + Core</div>
                <div className="tt-cell"><strong>7.30PM - 8PM</strong><br />Circuits</div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <h3>THURSDAY</h3>
                <div className="tt-cell"><strong>6AM - 6.30AM</strong><br />Strength Circuits</div>
                <div className="tt-cell"><strong>9.30AM - 10AM</strong><br />Strength Circuits</div>
                <div className="tt-cell"><strong>6.15PM - 6.45PM</strong><br />Strength Circuits</div>
                <div className="tt-cell"><strong>7PM - 7.45PM</strong><br />RT24 HIRT + Ab Blast</div>
              </div>
              <div className="col-4">
              <h3>FRIDAY</h3>
              <div className="tt-cell"><strong>5.45AM - 6.15AM</strong><br />RT24 HIRT</div>
                <div className="tt-cell"><strong>9.30AM - 10AM</strong><br />Body Blitz</div>
                <div className="tt-cell"><strong>5.45PM - 6.30PM</strong><br />Body Blitz</div>
                <div className="tt-cell"><strong>6.45PM - 7.15PM</strong><br />HIIT Circuits</div>
                <div className="tt-cell"><strong>7.30PM - 8PM</strong><br />Body Blitz</div>
              </div>
              <div className="col-4">
              <h3>SATURDAY</h3>
                <div className="tt-cell"><strong>8.30AM - 9.15AM</strong><br />Circuits + Ab Blast</div>
                <div className="tt-cell"><strong>10AM - 11AM</strong><br />Cura Kids (*paid separately)</div>
              </div>
            </div>    

            <h3>ONE MONTHLY MEMBERSHIP. AS MANY CLASSES AS YOU CAN HANDLE.</h3>        
            <a href="/unlimited-classes/" className="button">Find Out More About Unlimited Membership</a>


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
