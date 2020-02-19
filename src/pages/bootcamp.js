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
  <h1>Bootcamp</h1>
</div>

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">

              <h2>Ten recruits. Six weeks. Eighteen sessions. Let's get it on.</h2>

              <hr className="style1" />

            </div>

            <div className="row">

                <div className="col-6">
                <h2>What is Bootcamp?</h2>
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
                We run four separate morning and evening bootcamps on rolling six week cycles.
                <br /><br />
                <strong>APPLICATIONS ARE NOW CLOSED!</strong>
                <br /><br />
                Bootcamp spaces fill up fast so put your name down ASAP to register your interest for our next intake:
                <br /><br />
                <a href="/contact/" className="goldbutton">Keep me updated</a>
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
