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
              <h2>Want to make a real difference to your life?</h2>

            <p>

                We make things as simple as possible for you to reach your personal health and fitness goals.
                <br /><br />
                That means:

                <ul>
                    <li>
                    Times that suit your busy lifestyle.
                    </li>
                    <li>
                    Sessions that are short and relentlessly intense.
                    </li>
                    <li>
                    Simple payment options.
                    </li>
                    <li>
                    Flexibility, great value and sessions when you need them.
                    </li>                    
                </ul>

                <h3>Plans and Pricing.</h3>
                We don’t have dozens of different plans to confuse people.
                <br /><br />
                Coronavirus has made us change the way we work but we still offer a range of plans to suit your personal goals.

            </p>   

            </div>

            <div className="row">

                <div className="col-4 bgbronze">

                    <h2 className="u-textCenter">Online LIVE Classes</h2>
                    <strong>
                    Fitter. Healthier. Stronger.
                    </strong>
                    <br /><br />
                    Pay only £20/month and get access to our growing online community with support and guidance from our expert personal trainer.
                    <br /><br />
                    You  get unlimited access to our full online catalogue of expertly planned LIVE 
                    sessions. Do as many as you want for the whole of that month.
                    <br /><br />

                    <strong>Choose from classes including:</strong>
                    <br /><br />

                    Circuits : Upper Body Dumbbells : Boxfit : Legs, Bums, Tums : Core Conditioning : And much more!
                    <br /><br />
                    <ul>
                        <li>
                        No joining fee.
                        </li>
                        <li>
                        No contract.
                        </li>
                        <li>
                        No leaving fee.
                        </li>
                        
                    </ul>

                    <div className="u-textCenter">
                        <h3>Limited spaces available.</h3>
                        <h2>£20 / month</h2>
                        <strong>Want to find out more?</strong>
                        <br /><br />
                        <a href="/contact/" className="button">Book your place now</a>
                    </div>
                </div>

                <div className="col-4 bgsilver">
                    <h2 className="u-textCenter">Online Bootcamp</h2>
                    <strong>Six weeks. 3 x 30 minute sessions per week.<br /><br />
                    All from the comfort of your own living room.</strong>
                    <br /><br />
                    Shredding the pounds and inches off as you go.
                    <br /><br />
                    Not for the faint hearted.
                    <br /><br />
                    Bootcamp means interval training – bursts of intense activity alternated with intervals of lighter activity.
                    <br /><br />
                    Expect calisthenics, push ups, lunges, squats, sprints, military-style drills and so much more.
                    <br /><br />
                    You will work like you have never worked before but if you put the effort in, you will get your reward back out.
                    <br /><br />
                    <strong>Stay off the scales.</strong> We measure success in inches off and we have the results to prove it works.

                    <div className="u-textCenter">
                        
                        <h3>April 2021 Bootcamp Applications are now CLOSED.</h3>
                      
                    <strong>Interested in joining up next time?</strong>
                      <br /><br />
                        <a href="/bootcamp/" className="button">Get more details</a>
                    </div>
                    
                </div>

                <div className="col-4 bggold">

                <h2 className="u-textCenter">Personal Training</h2>
                For those who want to <strong>go the extra mile</strong> to <strong>get the results</strong> they want to see.
                    <br /><br />
                    Personal Training sessions with our fully qualified personal trainer will really push your fitness on to the next level.
                    <br /><br />
                    With one-to-one or super small in-studio sessions catered for, PT can make all of the difference to you reaching your goals.
                    <br /><br />
                    With additional support including:
                    <br /><br />
                    <ul>
                        <li>
                            Regular measurements and body analysis.
                        </li>
                        <li>
                        Weekly check-in and food diary monitoring.
                        </li>
                        <li>
                        Dietary guidance.
                        </li>
                        <li>
                        24/7 coach support.
                        </li>
                    </ul>

                    <div className="u-textCenter">
                        <h3>Limited availability for online personal training.</h3>
                        <br /><br />
                        <a href="/contact/" className="button">Register your interest</a>
                    </div>

                </div>
                
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
