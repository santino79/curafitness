import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ApplyBoot extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Apply For Bootcamp"
          keywords={[`female`, `fitness`, `studio`, `gym`, `apply`, `bootcamp`]}
        />

<div className="Hero HomeHero">
  <h1>Apply For Bootcamp</h1>
</div>


<div className="Column">
          <div className="MainContent">

            <div className="u-textLeft">

                <h2>Bootcamp Application Window is now OPEN.</h2>
                The application process for our January 2020 Bootcamp is now <strong>OPEN</strong>. This time we have FOUR different bootcamp times available to suit everyone's busy schedule.
                
                <h3>What is Bootcamp?</h3>
                Find out more about <a href="/bootcamp/" target="_blank" rel="noopener noreferrer">Bootcamp at Cura Fitness</a>.
                
                <h3>What dates does Bootcamp start and finish on?</h3>
                Bootcamp will run every Monday, Wednesday and Friday.
                <br /><br />
                It starts on Monday 6th January 2019 and finishes on Friday 14th February 2020.

                <h3>What are the options?</h3>
                We've changed things up this time with even more times and options available to suit you.
                <h3>30 Minute Bootcamp</h3>
                <ul>
                    <li>3 x 30-minute sessions on Monday, Wednesday and Friday every week for SIX weeks.</li>
                    <li>Times available are:
                <ul>
                    <li><del datetime="2019-12-03T13:55:36+00:00">Morning - 6.30 AM</del> <strong>NOW FULL</strong></li>
                    <li>School Run - 9.30 AM</li>
                    <li>Evening - 7.30 PM</li>
                </ul>
                </li>
                    <li>Cost: £80 for 6 weeks (works out at only £4.44 per 30-minute session!)</li>
                </ul>
                <h3>45 Minute Bootcamp</h3>
                <ul>
                    <li>3 x 45-minute sessions on Monday, Wednesday and Friday every week for SIX weeks.</li>
                    <li>Time: 5.45 PM</li>
                    <li>Cost: £100 for 6 weeks (works out at only £5.55 per 45minute session!)</li>
                    <li><em>What's different?</em> We'll be doing an additional Ab Blast at the end of each session to really work those core muscles hard.</li>
                </ul>

                <strong>Plus we have a Saturday Circuits bolt-on available.</strong>
                <br /><br />
                For only £20 more you can add an extra Circuits class on Saturday mornings at 8.30 AM for the six-week bootcamp. 
                These are really popular amongst our members who want to keep their bodies working hard over the weekend and are a great addition to your 3 Bootcamp sessions.
                
                <h2>Apply Now.</h2>
                The application window will only be open for a short time so please complete the application form below as soon as possible. 
                If you have any questions in the meantime, please don't hesitate to <a href="/contact">contact us</a> and we'll get straight back to you.
                <br /><br />

                (Fields marked with an * are required)

                <div className="ash-form">
                <form name="apply-bootcamp" method="POST" data-netlify="true" action="/apply-success">
                <input type="hidden" name="form-name" value="apply-bootcamp" />  
                <p>
                  <label><strong>Name*</strong></label>
                  <br />
                  <input type="text" required name="name" />   
                </p>
                <p>
                  <label><strong>Email*</strong></label>
                  <br /> <input type="email" required name="email" />
                </p>
                <p>
                  <label><strong>Phone</strong></label>
                  <br /> <input type="phone" name="phone" />
                </p>

                <br />
                
                <p>
                  <strong>Bootcamp Starts:</strong> Monday 06/01/2020
                  <br /><br />
                  <strong>Bootcamp Ends:</strong> Friday 14/02/2020
                </p>

                <strong>Which bootcamp would you prefer to join? *</strong>
                <br /><br />
                    <select name="choice" id="choice-select">
                        <option value="">--Please choose a bootcamp--</option>
                        <option value="0930">School Run - 9.30 AM</option>
                        <option value="1745">After Work - 5.45 PM</option>
                        <option value="1930">Evening - 7.30 PM</option>
                      </select>

                <br /><br />

                <strong>Do you want to bolt-on Saturday Circuits (+£20)?</strong>
                <br /><br />
                    <select name="satbolton" id="satbolton-select">
                        <option value="N" checked>No</option>
                        <option value="Y">Yes</option>
                      </select>

                <br /><br />

                
                <p>
                  <label><strong>What are your goals? What would you like to achieve in this 6 week bootcamp? *</strong></label>
                  <br /><textarea name="goals"></textarea>
                    <br /><br />
                  <label><strong>What is your current level of fitness? *</strong></label>
                  <br /><textarea name="fitlevel"></textarea>
                  <br /><br />
                  <label><strong>Are you able to commit to 3 sessions per week to get the results and achieve your goals? *</strong></label>
                  <br /><textarea name="commit3"></textarea>
                </p>

                <p>
                  <button type="submit" className="goldbutton">Apply Now</button>
                </p>

              </form>
              </div>





            </div>

          </div>
        </div>

      </Layout>
    )
  }
}

export default ApplyBoot

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
