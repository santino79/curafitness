import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Boutique Female Fitness Studio in Banbridge, County Down, Northern Ireland"
          keywords={[`female`, `fitness`, `studio`, `gym`, `bootcamp`, `personal training`,`women`]}
        />

      <div className="Hero HomeHero">
          <h1>Your Success Is Our Success</h1>
          <h2>Look what can be done with hard work and dedication.</h2>
          <br />
          <a href="/success-stories/" className="goldbutton">See our Success Stories</a>
      </div>

      <div className="Column">
          <div className="MainContent">

            <div className="u-textCenter">

              <h2>Small Group Female Fitness Classes, Pilates, and Personal Training.</h2>
              <p>
              Cura Fitness is a female only boutique fitness studio based in Banbridge, County Down, Northern Ireland.
              </p>
            
            <hr className="style1" />
            
            <h2>Forget all you think you know about gyms and fitness classes.</h2>
           <p>

            We provide studio-based small group and individual personal training to anyone who wants to make a real positive difference to their lives.
            <br /><br />
            No gym bunnies or meatheads posing in mirrors.
            <br /><br />
            No cliques. No toxic atmosphere.
            <br /><br />
            We create a welcoming, friendly and inclusive environment for ladies of all ages, shapes, sizes, and fitness levels.
            <br /><br />
            Somewhere special for YOU to make the long term health and fitness changes to your lifestyle that you want to see. 
            </p>


          <div className="row">
            <div className="col-4">
              <img src="images/2628-Winner-Badge.svg" className="icon" alt="Winner Badge" />
              <h3>Improve Yourself</h3>
              <p>
              Classes suitable for all abilities and fitness levels, scientifically proven to improve your physical & mental health, strength and fitness.
              </p>
            </div>
            <div className="col-4">
            <img src="images/6626-Downward-Facing-Dog-Pose.svg" className="icon" alt="Downward Facing Dog Pose" />
              <h3>Flexible Options</h3>
              <p>
              We won’t hit you with any hidden joining fees or leaving penalties or tie you into a long contract. We make it as easy as possible to join up or leave when you want to.              </p>
            </div>
            <div className="col-4">
            <img src="images/2638-StopWatch.svg" className="icon" alt="Stopwatch" />
              <h3>Times That Suit You</h3>
              <p>
              Life is hectic these days so we cater to all needs with sessions from early morning to evenings.             
              </p>
            </div>

          </div>

          </div>


        </div>
      </div>

      <div className="FullWidthContent">



          <div className="grid-wrapper">
              <div className="box1 bgimgs bgimg1"></div>
              <div className="box2">
                  <h2>Small Group Fitness Classes</h2>
                  <p>
                  <strong>Ready to build a new you?</strong>
                  <br /><br />
                  Not for the faint hearted, our small group classes mean interval training – bursts of intense activity alternated with intervals of lighter activity.
                  <br /><br />
                  Whether it's mornings or evenings, we offer times that suit you.
                  <br /><br />
                  From beginners and those getting back into fitness after a time away, we've got something for everyone.
                  <br /><br />
                  <a href="/contact/" className="button">Find Out More About Class Availability</a>
                  </p>              
                
              </div>


              <div className="box3">
                  <h2>Personal Training</h2>
                  <p>
                  <strong>Feel like you've hit a wall in your journey?</strong>
                  <br /><br />
                  Our highly qualified personal trainer will work with you to build a personalised training plan that brings you back on track.
                  <br /><br />
                  Building lean muscle, reducing body fat and increasing your sense of self-worth are paramount.
                  <br /><br />
                  Using a range of advanced workout methods, you will see results faster, increase your commitment to meeting your personal goals and enjoy the variety of training plans we use.              
                  <br /><br />
                  <a href="https://elizabethhylands.com" className="button">Find Out More About Elizabeth Hylands Personal Training</a>
                  </p>
              </div>
              <div className="box4 bgimgs bgimgehpt"></div>
            </div>

          </div>


          <div className="TestOverlay">
            <div className="MainContent u-textCenter whiteWords">
            <h2 className="whiteWords">Listen to some feedback from our customers</h2>
            <p>
            “I would highly recommend Liz without hesitation to anyone who is considering availing of her services” – Karen
            <br /><br />
            “I am delighted with my results at Cura. Liz has supported me every step of the way” – Marion
            <br /><br />
            “Liz has supported me every step of the way especially during this challenge. Liz is very passionate and provides support to all her clients.” – Denise
            <br /><br />
            "I will be forever grateful to Liz for what she has done for me and I can’t wait to continue training with her." - Sarah
            </p>
            </div>
          </div>


      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`
