import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Unlimited extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Unlimited Classes"
          keywords={[`cura fitness`, `unlimited`, `classes`, `membership`]}
        />
    <div className="Hero SuccessHero">
      <h1>Unlimited Classes</h1>
    </div>

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">

              <h2>Small groups. No judgement. Just hard work.</h2>

              <hr className="style1" />

            </div>

            <div className="row">

                <div className="col-6">
                Group fitness classes aren’t an afterthought at Cura Fitness – <strong>they are the lifeblood of our studio.</strong>
                <br /><br />
                <ul>
                    <li>
                    Small class sizes so you don’t feel like just one more face in the crowd.
                    </li>
                    <li>
                    A large range of different class options so everyone has something they can work hard at and enjoy.
                    </li>
                    <li>
                    Highly trained and enthusiastic instructors who know when to push you harder so you get the results you are looking for.                
                    </li>

                    </ul>
                </div>

                <div className="col-6">
                <strong>How does it work?</strong>
                <br /><br />
                <ul>
                    <li>
                    No joining fee. No long term contracts.
                    </li>
                    <li>
                    Just pay your monthly membership and you can join as many classes as you want for that whole month.
                    </li>
                    <li>
                    You can even book and manage your classes from your phone using our simple booking system.
                    </li>
                    <li>
                    You’ll also get free access to our private members’ Facebook group.
                    </li>
                    <li>
                    It’s really that simple.
                    </li>
                </ul>

               </div>

            </div>


            <div className="u-textCenter">
               <h2>All for only £60 per month.</h2>

               <strong>(UPDATE:</strong> We've got a few spaces available but they won't last long.)
               <br /><br />
               <strong>Grab yours now and start your journey.</strong>
               <br /><br />
               <a href="/contact/" className="goldbutton">Book your FREE consultation today</a>
            </div>

          </div>
        </div>

      </Layout>
    )
  }
}

export default Unlimited

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
