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
              <h2>What's on offer in January 2022 at Cura Fitness?</h2>

            <p>

                From Bootcamp to Pilates, small group studio sessions to individual one-on-one Personal Training, we've got something for everyone.
                <br /><br />
                Demand has been very high already as we close out 2021 so spaces are limited. Check out the links below, see what catches your eye and apply ASAP to secure your spot.

                <h2><em>Bootcamp</em></h2>
                <a href="/bootcamp/"><img src="/images/CFJan2022BootcampFlyerA4W400.png" alt="January 2022 Bootcamp" /></a>
                <br /><br />
                Six weeks. Eighteen sessions. Starting Monday 3rd January until Friday 11th February.
                <br /><br />
                <strike>We have limited spaces still available in the 6PM Evening slot. (Sorry, 6AM and 6PM are FULLY BOOKED.)</strike>
                <br /><br />
                <strong>Bootcamp applications are now CLOSED.</strong>

                <h2><em>Small Group Studio Sessions</em></h2>
                Our Small Group sessions are specially tailored to hit all of your muscle groups, making you fitter, healthier and stronger.
                <br /><br />
                Whether it's early morning or in the evenings, we offer times that suit you. 
                With classes including Circuits, Barbell, Lights Weights and Cardio, there really is something for everyone.
                <br /><br />
                Our January timetable is now live so if you would like to find out more or 
                get added to our booking system, contact us on the link below.
                <br /><br />
                <a href="/contact" className="button">Find Out More About Small Group Studio Sessions</a>

                <br /><br />
                <br /><br />
                <img src="/images/pilates-with-jillW400.png" alt="Pilates With Jill" />
                <br /><br />
                We've recently started to offer <strong>Pilates With Jill</strong> on Tuesday and Thursday evenings and demand has been massive.
                <br /><br />
                Classes last for 45 minutes and the four week block costs £30. January's classes are fully booked but get in touch for future releases.
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
