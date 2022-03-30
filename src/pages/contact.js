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
        If you are interested in Bootcamp, Pilates or Personal Training, please send us a message on the form below and we'll get back to you as soon as possible.
        </p>
        <h3>NOTE: WE HAVE VERY LIMITED AVAILABILITY FOR ONE-TO-ONE PERSONAL TRAINING</h3>
        <p><em>If you would like to see if any slots are currently available, please fill out the form with your availability and we'll get back to you when spaces open up.</em></p>
          </div>

          <div className="u-textLeft">

            <div className="ash-form">
                <form name="contact" method="POST" data-netlify="true" action="/contact-success">
                <input type="hidden" name="form-name" value="contact" />  
                <p>
                  <label><strong>Your Name:</strong></label>
                  <br />
                  <input type="text" name="name" />   
                </p>
                <p>
                  <label><strong>Your Email:</strong></label>
                  <br /> <input type="email" name="email" />
                </p>
                <p>
                  <label><strong>Your Phone:</strong></label>
                  <br /> <input type="phone" name="phone" />
                </p>
                <p>
                  <label><strong>Message:</strong></label>
                  <br /><textarea name="message"></textarea>
                </p>
                <p>
                  <button type="submit" className="goldbutton">Send</button>
                </p>
              </form>
              </div>

            
                <br /><br />
            <h3>You can also reach us on:</h3>
            <p>
                <strong>Email:</strong> team@curafitness.com
                <br /><br />
                <strong>Facebook:</strong> www.facebook.com/curafitness
                <br /><br />
            </p>
            <h3>You can find us at:</h3>
            <p>
                <strong>Studio address:</strong> 1st Floor, 32 Bridge Street, Banbridge, Co. Down BT32 3JS
                <br /><br />
                (We don’t accept walk-ins for consultations or classes however so please do get in touch first to arrange a consultation.)
                <br /><br />
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