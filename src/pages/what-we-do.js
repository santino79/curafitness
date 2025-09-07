import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

class WWDo extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
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
                We've moved into our new home at 69 Bridge Street, Banbridge and are ready for a whole new chapter at Cura Fitness.
                <br /><br />
                We currently offer:
                <br /><br />
                <ul>
                  <li>Small group studio fitness classes</li>
                  <li>Pilates</li>
                  <li>Individual one-on-one Personal Training</li>
                </ul>
                
                More more details on times and availability, please <a href="/contact/">get in touch</a>.
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
