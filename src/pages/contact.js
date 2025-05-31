import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactPage extends React.Component {
  render() {

    return (
      <Layout title="Contact">
        <SEO title="Contact" />
        <div className="Hero ContactHero">
          <h1>Contact</h1>
      </div>

        <div className="Column">
          <div className="MainContent">

          <div className="u-textCenter">

          <h2>CURA FITNESS
          <br /><br />
          Know Your Worth</h2>
          <hr className="style1" />
        
        <p>
        As we're moving from our current studio, we are not accepting any new clients at the moment.
        <br /><br />
        Please check back for more information on our new studio and the services we'll be offering.
        </p>

        <p>
            <em>Cura Fitness Ltd is a limited company registered in Northern Ireland (Company Reg No: NI653208).
                <br />
                Our registered office is 20 Upper Water St, Newry BT34 1DJ</em>
            
        </p>


            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default ContactPage