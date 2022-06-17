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

                From Bootcamp to Pilates, small group studio sessions to individual one-on-one Personal Training, we've got something for everyone.
                <br /><br />
                Demand has been very high all through 2022 so spaces are limited. Check out the links below, see what catches your eye and apply ASAP to secure your spot.

                <h2><em>Bootcamp</em></h2>
                <strong>Next Bootcamp Intake.</strong>
                <br /><br />
                Five weeks. Fifteen sessions. Starting Monday 18th July until Friday 19th AUgust.
                <br /><br />
                We offer THREE time slots: 6AM, 6.45AM, and 6.15PM.
                <br /><br />
                <strong>Bootcamp applications are opening soon.</strong>
                <br /><br />
                <a href="/bootcamp" className="button">Find Out More About Bootcamp</a>

                <br /><br />
                <br /><br />
                <h2><em>Pilates</em></h2>
                We've recently started to offer <strong>Pilates</strong> on Tuesday evenings and demand has been massive.
                <br /><br />
                Classes last for 45 minutes and the four week block costs £30. June classes are fully booked but get in touch for future releases.
                <br /><br />
                <a href="/contact/" className="button">Contact About Pilates Availability</a>


                <br /><br />
                <br /><br />
                <a href="https://elizabethhylands.com/"><img src="/images/EHPT400WLogov00.05.png" alt="Elizabeth Hylands Personal Training" /></a>
                <br /><br />

                Elizabeth Hylands is a certified Personal Trainer who provides personal training to women who want to make a real positive difference to their lives.
                <br /><br />
                Her availability is incredibly limited at the moment but check out the link below to find out more and enquire about available time slots. 
                <br /><br />
                <a href="https://elizabethhylands.com/" className="button">Find Out More About Elizabeth Hylands Personal Training</a>


                <h2><em>15 Week Challenge</em></h2>
                Our <a href="/15-week-challenge/">15 Week Challenge</a> only runs from August to mid-December each year.
                <br /><br />
                <strong>We'l be releasing info on the 2022 15 Week Challenge very soon.</strong>
                <br /><br />
                If it's nutrition advice and diet accountability you are after then watch this space early in the New Year. Elizabeth is a fully certified <a href="https://www.mac-nutritionuni.com/">MacNutritionist</a> and 
                will be launching a full new range of nutrition packages soon.  


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
