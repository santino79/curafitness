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

              <h2>Seven weeks. Twenty-one sessions. Let's get it on.</h2>

              <hr className="style1" />

            </div>

            <div className="row">

                <div className="col-6">
                <h2>What is Bootcamp?</h2>
                <strong><em>NB: Due to Covid-19, Bootcamp is now conducted online via Zoom.</em></strong>
                <br /><br />
                Seven weeks, 3 x 30 minute sessions per week, shredding the pounds and inches off as you go.
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
                Working in a small group setting under the watchful eye of our top class personal trainer will really help you push on towards your goal of being a better you after your six weeks.
                <h2>When is the next Bootcamp?</h2>
                <strong>Dates:</strong><br />
                Monday 24th May 2021 to Friday 9th July 2021
                <br /><br />
                <strong>Days:</strong><br />
                 Monday, Wednesday and Friday.
                <br />
                <strong>Times:</strong><br />
                 5.45AM or 6PM
                
               </div>

            </div>


            <div className="row">
              <div className="col-6">
              <h2>Some feedback from our Bootcampers.</h2>
              "Thanks for this morning, really enjoyed it! I also find myself getting stronger. I was able to attempt the burpees, and jump my legs back rather than step for them all..."
              <br /><br />
              "Honestly...my heart sinks when I realise it’s boot camp day 🤣. You know how I feel about cardio!! But I’m always glad I did it. You explain everything well and it’s only half hour which is spot on - glad I signed up xx"
              <br /><br />
              "Ah fab really loving the bootcamp, helping my mind and keeping me accountable"
              <br /><br />
              "Hi Liz am loving Boot camp!! Love the variety and pace - though it’s tough and you are getting tougher!!!! Defo be joining you for the next time."


              </div>
              <div className="col-6">
              <h2>How do I sign up for Bootcamp?</h2>
                <strong>BOOTCAMP APPLICATIONS FOR MAY 2021 ARE NOW OPEN!</strong>
                <br /><br />
                <strong>ONLY £90 (£4.29 per session - 7 week series.)</strong>
                <br /><br />
                <a href="https://forms.gle/dtgs8KzLBif1V3qu8" className="goldbutton">Sign Up Now</a>

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
