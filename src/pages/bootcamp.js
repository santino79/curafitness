import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Bootcamp extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Bootcamp"
          keywords={[`cura fitness`, `bootcamp`]}
        />
<div className="Hero BootcampHero">
  <h1>Online Bootcamp</h1>
</div>

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">

              <h2>Six weeks. Eighteen sessions. Let's get it on.</h2>

              <hr className="style1" />

            </div>

            <div className="row">

                <div className="col-6">
                <h2>What is Bootcamp?</h2>
                <strong><em>NB: Due to Covid-19, Bootcamp is now conducted online via Zoom.</em></strong>
                <br /><br />
                Six weeks, 3 x 30 minute sessions per week, shredding the pounds and inches off as you go.
                <br /><br />
                Not for the faint hearted, Bootcamp means interval training – bursts of intense activity alternated with intervals of lighter activity.
                <br /><br />
                Expect calisthenics, push ups, lunges, squats, sprints, military-style drills and so much more.

                <h2>Who is Bootcamp for?</h2>
                We cater for all levels of fitness in all of our bootcamps. Exercises can be adapted for those with particular requirements.
                <br /><br />

                Bootcamp would be especially suitable if you:
                <ul>
                    <li>
                    Haven’t exercised in a while and want to get back into it.
                    </li>
                    <li>
                    Have a very strict schedule with work, family or other commitments.
                    </li>
                    <li>
                    Want to try it out for the 6 week course before deciding on your next fitness plan.                
                    </li>

                </ul>
            </div>

                <div className="col-6">
                <h2>How does Bootcamp work?</h2>
                There is really no magic behind it. Just lots of intense training combining light weights for resistance to build strength and interval based cardio work to get your heart and lungs working.
                <br /><br />
                Bootcamp workouts will help build lean muscle, burn fat and calories and increase your metabolism, even after you leave the Cura studio.
                <br /><br />
                Working in a small group setting under the watchful eye of our top class instructors will really help you push on towards your goal of being a better you after your six weeks.

                <h2>How do I sign up for Bootcamp?</h2>
                <strong>Dates:</strong><br />
                Our next Bootcamp runs from Monday 4th January 2021 until Friday 12th February 2021
                <br />
                <strong>Days:</strong><br />
                 Monday, Wednesday and Friday.
                <br />
                <strong>Times:</strong><br />
                 6.45AM or 6PM
                <br /><br />
                <strong>APPLICATIONS ARE NOW OPEN.</strong>
                <br /><br />
                Book and pay before the end of December and take advantage of our <strong>EARLY BIRD OFFER</strong>.
                <br /><br />
                Usually £80, Early Birds can get the full 6 week Bootcamp for <strong>ONLY £60</strong> (that's £3.33 per session, 
                a massive 25% SAVING.)
                <br /><br />
                <a href="https://forms.gle/GWfuHUoiNLvBnc5JA" className="goldbutton">Book your place NOW</a>
               </div>

            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default Bootcamp

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
