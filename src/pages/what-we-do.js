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
                Coronavirus has made us change the way we work but we still offer a range of options to suit your personal goals.

            </p>   

            </div>

            <div className="row">


                <div className="col-6 bgsilver">
                    <h2 className="u-textCenter">Small Group Studio Sessions</h2>
                    <strong>Worried that lockdown encouraged you into some bad behaviours?</strong> You aren't alone.
                    <br /><br />
                    If you want to get a kickstart into getting fitter and healthier or losing a few of those extra lockdown inches 
                    then these 30 or 45 minute sessions will be perfect for you.
                    <br /><br />
                    With a range of different options from Barbell to Circuits to Small Group PT, you'll be working hard and shredding the pounds and inches off as you go.
                    <br /><br />
                    Studio Sessions are not for the faint hearted.
                    <br /><br />
                    You will work like you have never worked before but if you put the effort in, you will get your reward back out.
                    <br /><br />
                    <strong>Stay off the scales.</strong> We measure success in inches off and we have the results to prove it works.

                    <div className="u-textCenter">
                        
                        <h3>Want to find out more about small group studio sessions?</h3>
                      
                        <a href="/contact/" className="button">Get in touch</a>
                    </div>
                    
                </div>

                <div className="col-6 bggold">

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
