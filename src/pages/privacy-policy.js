import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class PrivPol extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Privacy Policy"
          keywords={[`cura fitness`, `privacy`, `policy`]}
        />

<div className="Column">
          <div className="MainContent">
            <div className="u-textLeft">
            <h1>Privacy Policy</h1>

            Cura Fitness (“us”, “we”, or “our”) operates https://curafitness.com (the “Site”). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
<br /><br />
We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.

<h3>Information Collection And Use</h3>

While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, email address or details provided to us when you were registering with us (“Personal Information”).

<h3>Log Data</h3>

Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”).
<br /><br />
This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
<br /><br />
We use Google Analytics to analyse the use of this website. Google Analytics generates statistical and other information about website use by means of cookies, which are stored on users’ computers. The information generated relating to our website is used to create reports about the use of the website. Google will store this information. Google’s privacy policy is available at: http://www.google.com/privacypolicy.html.

<h3>Communications</h3>

We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that will enable you to use the services available on this website.
<br /><br />
We may also use it to administer the website, prevent fraud or spam and keep the website secure.
<br /><br />
We will not, without your express consent, provide your personal information to any third parties for the purpose of direct marketing

<h3>Cookies</h3>

Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.
<br /><br />
Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.

<h3>Security</h3>

The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.

<h3>Changes To This Privacy Policy</h3>

This Privacy Policy is effective as of 01/09/2025 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
<br /><br />
We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
<br /><br />
If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.

<h3>Contact Us</h3>

If you have any questions about this Privacy Policy, please <a href="/contact/">contact us</a>.


            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default PrivPol

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
