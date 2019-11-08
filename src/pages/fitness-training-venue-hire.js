import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class VenueHire extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Fitness Training Venue Hire"
          keywords={[`cura fitness`, `fitness`, `training`, `venue`, `hire`]}
        />

<div className="Hero VenueHero">
  <h1>Fitness Training Venue Hire</h1>
</div>


<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">

              <h3>Looking for a venue to host your fitness training course but can’t find somewhere that offers both classroom and practical fitness training facilities?</h3>

            <h2><strong>Welcome to the Cura Fitness Training Academy.</strong></h2>
            <br /><br />
            <hr className="style1" />
            </div>

            <div className="u-textLeft">

                <h3>What is the Cura Fitness Training Academy?</h3>

                We provide a premier venue for fitness education and training courses, giving you the perfect space to deliver the highest quality fitness education.
                <br /><br />
                Our first class facilities are located in a prime position to cater for training courses for fitness professionals from all over the island of Ireland.

                <br /><br />

                <h3 className="u-textCenter">We offer the following training facilities:</h3>

                <hr className="style1" />

                <h2>Lecture Room.</h2>

                Accommodating up to 10 students, our training room offers the perfect space for fitness training courses for small groups, clubs or individual fitness professionals.
                <br /><br />
                Room hire includes:
                <ul>
                    <li>
                    Full use of audio-visual equipment including projector and screen.
                    </li>
                    <li>
                    Flip charts.  
                    </li>
                    <li>
                    Free Wi-fi access. 
                    </li>
                    <li>
                    Toilet facilities. 
                    </li>
                    <li>
                    Tea & Coffee.
                    </li>            
                </ul>

                <br /><br />

                <img src="/images/cf_training_room20190503_1_800w.jpg" alt="Training room" />

                <h2>Fitness Studios.</h2>

                Our first-class fitness studios are also available for hire.
                <br /><br />
                Featuring industry leading 43mm rubber safety flooring throughout, our 55m2 main fitness studio and 38m2 personal training studio are fully at your disposal.
                <br /><br />

                Unlike many other training facilities where your students have to share public training areas with regular gym members, we make our studio into your own personal, fully equipped <strong>private</strong> fitness studio for the duration of your training.
                <br /><br />

                With top of the range equipment including studio barbell sets, bumper weight plates, power rack and much more, we cater for all manner of fitness training you may wish to offer.
                <br /><br />

                We also provide full use of our music and PA system.
                <br /><br />

                We can also work with you if you want to provide your own specialist equipment such as spin bikes or kettle bells for specific training needs.
                <br /><br />

                <img src="/images/cf_studio1_20180702_1_800w.jpg" alt="Fitness studio room" />

                <h2>Location:</h2>

                We are situated in <strong>Banbridge, County Down, Northern Ireland</strong>.
                <br /><br />

                Banbridge is located on the main A1 dual carriageway which directly links Dublin and Belfast and is a central position to accommodate easy access from the south, east and west of Ireland.
                <br /><br />

                Banbridge is:
                <br /><br />
                <ul>
                    <li>
                    25 miles from Belfast
                    </li>
                    <li>
                    15 miles from Newry
                    </li>
                    <li>
                    28 miles from Dundalk
                    </li>
                    <li>
                    50 miles from Drogheda
                    </li>
                    <li>
                    80 miles from Dublin
                    </li>
                    <li>
                    12 miles from Portadown
                    </li>
                    <li>
                    30 miles from Dungannon
                    </li>
                    <li>
                    35 miles from Cookstown
                    </li>
                    <li>
                    55 miles from Omagh
                    </li>
                </ul>


                <h2>Parking & Local Facilities:</h2>

                Cura Fitness is on Bridge Street in Banbridge town centre.
                <br /><br />
                We have two large public car parks within 1 minute’s walk of the studio. Both car parks offer free parking on Sundays as well as limited on-street parking.
                <br /><br />
                Banbridge has a host of excellent cafes, restaurants and coffee shops open seven days a week.
                <br /><br />
                Right next door to our studio is the Rosehip Café and Bakery which offers hot and cold meals seven days a week along with a large selection of breads, cakes and pastries baked on the premises.

                <h2>Price & Availability:</h2>

                We currently offer training facilities hire on Saturdays and Sundays throughout the year.
                <br /><br />
                Full day hire including use of the lecture room and both fitness studios is £150 per day.
                <br /><br />
                For more information and to check availability:
                <br /><br />
                <a href="/contact/" className="goldbutton">Contact us today</a>

            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default VenueHire

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
