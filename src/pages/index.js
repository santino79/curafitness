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
          <h1>Your Success Is Our Goal</h1>
          <h2>Setting your targets and working hard to reach them.</h2>
          <br />
          <a href="/success-stories/" className="goldbutton">Read some of our Success Stories</a>
      </div>

      <div className="Column">
          <div className="MainContent">

            <div className="u-textCenter">

              <h2>Online Fitness Classes and Studio-Based Personal Training.</h2>
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
              Life is hectic these days so we cater to all needs with sessions in early morning, in the evening and any time that suits you online.              </p>
            </div>

          </div>

          </div>


        </div>
      </div>

      <div className="FullWidthContent">



          <div className="grid-wrapper">
              <div className="box1 bgimgs bgimg1"></div>
              <div className="box2">
                  <h2>Unlimited Online LIVE Classes</h2>
                  <p>
                  <strong>ONE MONTHLY MEMBERSHIP.</strong>
                  <br /><br />
                  <strong>AS MANY CLASSES AS YOU CAN HANDLE.</strong>
                  <br /><br />
                  Early morning, after school run, evenings. Any time that suits you.
                  <br /><br />
                  Access our catalogue of dozens of expertly planned online video workouts from our industry leading fitness instructors.
                  <br /><br />
                  Something to suit everyone. No excuses.
                  <br /><br />
                  <a href="/what-we-do/" className="button">Find Out More About Online LIVE Membership</a>
                  </p>              
                
              </div>
              <div className="box3">
                  <h2>Online Bootcamp</h2>
                  <p>
                  <strong>A little apprehensive about whether you’ll stick at your new fitness regime? Online Bootcamp might be your best starting point.</strong>
                  <br /><br />
                  Six weeks, 3 x 30 minute sessions per week, shredding the pounds and inches off as you go.
                  <br /><br />
                  Not for the faint hearted, Bootcamp means interval training – bursts of intense activity alternated with intervals of lighter activity.
                  <br /><br />
                  Expect calisthenics, push ups, lunges, squats, sprints, military-style drills and so much more. All from the comfort and safety of your own home.
                  <br /><br />
                  <a href="/bootcamp/" className="button">Find Out More About Bootcamp At Cura Fitness</a>
                  </p>            
              </div>
              <div className="box4 bgimgs bgimg2"></div>

              <div className="box5 bgimgs bgimgehpt"></div>
              <div className="box6">
                  <h2>Studio-Based Personal Training</h2>
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
            </div>

          </div>


          <div className="TestOverlay">
            <div className="MainContent u-textCenter whiteWords">
            <h2 className="whiteWords">Listen to some feedback from our members</h2>
            <p>
            “I couldn’t recommend Cura Fitness enough. I found it hard to get back to fitness after having a child due to time constraints so the early risers suits me perfectly. No mummy guilt for missing play time as she is snoozing!” – Audrey
            <br /><br />
            “love love love Cura Fitness and the classes here! Liz is amazing and knows exactly what she’s talking about, so encouraging and motivating too. Ive seen some great results and changes after just 6 weeks of boot camp and will definitely be booking back in! Honestly cannot recommend enough!” – Amy
            <br /><br />
            “I have to say that I am loving my new exercise regime with Liz at Cura fitness…the class times offered allow me to slot workouts in around my busy family and work life. Plus the workouts are only 30mins, are fun and extremely effective. These classes are ideal for anyone with a busy lifestyle but who recognises the importance of health and fitness.” – Stephanie
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
