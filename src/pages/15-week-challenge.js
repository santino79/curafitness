import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Challenge extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="15 Week Challenge"
          keywords={[`cura fitness`, `15`, `week`, `challenge`]}
        />
<div className="Hero WWDHero">
  <h1>15 Week Challenge</h1>
</div>

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">

              <h2>How good do you want to feel this Christmas?</h2>

              <hr className="style1" />

            </div>

            <div className="row">

                <div className="col-6">
                <h2>What is the 15 Week Challenge?</h2>
                There is an old adage in the fitness world that you can't out-train a bad diet. And goodness knows the past year or more in lockdown has proven it to many of us.
                <br /><br />
                Training hard, be it in small group sessions, bootcamps, online or with a personal trainer, is the best way to get ourselves fitter, healthier and stronger.
                <br /><br />
                But to truly get into the physical shape we want, we need the expert guidance of a qualified nutrionist and the accountability to make sure we stick to their guidance.
                <br /><br />
                <em><strong>This is what you get from the Cura Fitness 15 Week Challenge.</strong></em>


                <h2>What do you get?</h2>
                <ul>
                    <li>Measured + weighed on a set date every 2 weeks.</li>
                    <li>Nutritional guidance from up to date evidence based Nutritionist (pending Nov 21)</li>
                    <li>Added WhatsApp group support with recipes + guidance. </li>
                    <li>Free access to our workout group for additional workouts (worth hundreds £s).</li>
                    <li>Weekly food diary review. </li>
                </ul>               

                But most of all it's the added self-confidence and self-esteem that you can get from making tough changes to your lifestyle and getting the results you want at the end.

                </div>
            <div className="col-6">

                <h2>What can you win?</h2>

                Prizes will be judged based on most inches off, second criteria is weight loss.
                <br /><br />
                The top three winners will get:
                <ol>
                    <li>
                    £100 Cura Credit 
                    </li>
                    <li>
                    £50 Cura Credit
                    </li>
                    <li>
                    £25 Cura Credit                
                    </li>
                </ol>

                Plus a Cura goody bag. Credit can be used for anything at Cura Fitness, from Group PT to one-on-one Personal Training sessions.
            
            
                <h2>When does the next Challenge begin?</h2>

                <strong>Begins:</strong> Monday 30th August 2021
                <br />
                <strong>Ends:</strong> Friday 10th December 2021
                <br /><br />
                We will hold a Group meeting before the Challenge begins to complete initial weigh-in and measurements on <strong>Wednesday 25th August at 7pm.</strong>
                
                <h3>This point is very important.</h3>
                <strong>Food diaries are non negotiable.</strong> You will be given a book and this MUST be filled in weekly, then brought in every Monday for Liz to review. 
                You must be willing to take feedback and make the changes recommended.
            
            
            </div>



        </div>


        <div className="row">
            <div className="col-6">
            <h2>Some feedback from our previous Challenge winners.</h2>
            "I have really enjoyed taking part in this challenge. From the outset Liz provided us all with a wealth of information on eating well, providing a comprehensive booklet including tips on what we should and shouldn’t eat."
            <br /><br />
            "I managed to achieve amazing results whilst still enjoying normal activities. What I’m taking from it is that it is a lifestyle change, one that I can maintain long term and not just a fad diet."


            </div>
            <div className="col-6">
            <h2>How do I sign up for 15 Week Challenge?</h2>
            <strong>Interested in signing up?</strong>
            <br /><br />
            The 15 Week Challenge is not for the faint hearted. It's a major commitment in terms of time, dedication and willpower so be realistic with yourself before committing to it.
            <br /><br />
            Cost is £50, payable on application acceptance and is non-refundable.
            <br /><br />
            <a href="https://forms.gle/PbN7cJntjc6id7Mh6" className="goldbutton">Sign Up Now</a>
            </div>

        </div>


          </div>
        </div>

      </Layout>
    )
  }
}

export default Challenge

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
