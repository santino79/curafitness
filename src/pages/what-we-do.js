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
                Demand has been very high all through the year so spaces are limited. Check out the links below, see what catches your eye and apply ASAP to secure your spot.

                <h2><em>Bootcamp</em></h2>
                <strong>Next Bootcamp Intake.</strong>
                <br /><br />
                Our April / May 2023 5 Week Bootcamp began on Monday 17th April 2023. 
                <br /><br />
                <strong>Next Bootcamp applications will open in May 2023.</strong>
                <br /><br />
                <a href="/bootcamp/" className="button">Find out more about Bootcamp.</a>

                <br /><br />
                <br /><br />
                <h2><em>Pilates</em></h2>
                We offer <strong>Pilates</strong> on Tuesday evenings.
                <br /><br />
                Classes last for 45 minutes and are block booked for the month. Classes do book up quickly in advance but do get in touch for information on future releases.
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
                Our <a href="/15-week-challenge/">15 Week Challenge</a> runs from August to mid-December each year.
                <br /><br />
                <strong>Our 2022 15 Week Challenge was a resounding success. Details of our winners and their success coming soon.</strong>
                <br /><br />
                If it's nutrition advice and diet accountability you are after then please <a href="/contact/">contact us</a>. Elizabeth is a fully certified <a href="https://www.mac-nutritionuni.com/">MacNutritionist</a> and 
                will be launching a full range of nutrition packages soon.  


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
