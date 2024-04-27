import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Pilates extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Pilates"
          keywords={[`cura fitness`, `pilates`]}
        />
<div className="Hero BootcampHero">
  <h1>Pilates</h1>
</div>

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">

              <h2>Strengthen and Restore your Body to Balance.</h2>

              <hr className="style1" />

            </div>

            <div className="row">

                <div className="col-6">
                <h2>What is Pilates?</h2>
                Pilates was developed and first practised in the 1920s by Joseph and Clara Pilates in their gym in New York City.
                <br /><br />
                Much more than just a modern way to build a strong core, Pilates is a 
                holistic whole body exercise system. It is designed to address underlying structural imbalances in your body, which can 
                cause on-going chronic pain and difficulty with movement.

                <br /><br />
                Many physiotherapists and GPs recommend Pilates as one of the most effective forms of exercise available today.


                <h2>How does Pilates work?</h2>
                Pilates uses whole body movement, targeting specific muscle groups, 
                to re-educate movement patterns and rebalance the body's underlying muscular and structural system.
                <br /><br />
                You will be performing specific, controlled movements, guided by one of our highly qualified Pilates instructors.
                <br /><br />
                Improving your posture and alignment and correctly balancing musucular tensions, Pilates will help:
                <br /><br />
                <ul>
                    <li>
                    Get your body moving in a more correct way.
                    </li>
                    <li>
                    Improve your posture and overall fitness.
                    </li>
                    <li>
                    Relieve tension throughout your body.                
                    </li>
                    <li>
                    Rehabilitate and prevent further injuries.
                    </li>
                    <li>
                    Promote mindfulness and body awareness.                
                    </li>
                </ul>
                

            </div>

                <div className="col-6">

                <h2>Who is Pilates for?</h2>
                We cater for all ages, abilities, and fitness levels in our Pilates classes. 
                <br /><br />
                Exercises and movements can be adapted for those with particular requirements.
                <br /><br />

                Our Thursday sessions focus more on the beginner level and would be especially suitable if you:
                <br /><br />
                <ul>
                    <li>
                    Have poor posture.
                    </li>
                    <li>
                    Back or hip pain.
                    </li>
                    <li>
                    Muscle imbalances.                
                    </li>

                </ul>


                <h2>When do you run Pilates classes?</h2>
                Pilates at Cura Fitness is block-booked in advance for a monthly group of sessions.
                <br /><br />
                We run Pilates classes on:
                <br /><br />
                Tuesday evening at 6:45pm - 7.30pm<br />
                Thursday morning at 5.45am - 6.30am<br />
                Thursday evening at 6.45pm - 7.30pm


               <h2>How do I sign up for Pilates?</h2>

                To get more details about our next monthly block, please click the button below and fill in the form with your contact details.
                <br /><br />
                <a href="/contact/" className="goldbutton">Register Your Interest</a>


               </div>

            </div>


            <div className="Column">
          <div className="MainContent">

            <div className="u-textLeft">
            
            <h2 className="u-textCenter">Want to hear what can be achieved by doing Pilates at Cura Fitness?</h2>
            <hr className="style1" />

            Here is some recent feedback and testimonials from our Pilates clients, showing how much progress 
            they have made at our Pilates classes over the past few months.
            <br /><br />

            <hr className="style1" />

              <br /><br />

              Feedback 1
              <br /><br />
              Feedback 2
              <br /><br />
              Feedback 3
              <br /><br />
              Feedback 4
              <br /><br />
              Feedback 5
              <br /><br />
              Feedback 6
              <br /><br />
              Feedback 7
              <br /><br />
              Feedback 8
              <br /><br />
              Feedback 9
              <br /><br />


            </div>
          </div>
        </div>

          </div>
        </div>

      </Layout>
    )
  }
}

export default Pilates

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`