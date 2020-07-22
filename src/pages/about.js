import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {

    return (
      <Layout title="About">
        <SEO title="About" />
        <div className="Hero ContactHero">
          <h1>About</h1>
      </div>

        <div className="Column">
          <div className="MainContent">

          <div className="u-textCenter">

          <h2>What is Cura Fitness?</h2>
          <hr className="style1" />

          </div>

          <div className="u-textLeft">

            <div className="row">
              <div className="col-6">
              <h3>What do you do?</h3>
              Cura Fitness is a female only boutique fitness studio based in Banbridge, County Down, Northern Ireland.
              <br /><br />
              We provide online fitness classes, bootcamps and studio-based individual and small group personal training for ladies of all ages, shapes, sizes and fitness levels.
              </div>
              <div className="col-6">
                <h3>What does Cura mean?</h3>
                Cura means “care” in Italian. To us it means caring about ourselves, our physical and mental wellbeing, our health, our wellness.
                <br /><br />
                It also signifies how we care about our members and those who train with us.              
              </div>
            </div>

             <div className="u-textCenter">  
             <br /><br /> 
             <img src="/images/CuraFitnessLogo_400WWht.jpg" alt="Cura Fitness Logo" />
  
              <h1>This is the Cura Fitness story.</h1>
              </div>

              <hr className="style1" />

              The Cura Fitness journey began in November 2017 when Liz Hylands decided to set up her own business, having completed her training and worked at another fitness studio.
              <br /><br />
              <strong>Liz takes up the story:</strong>
              <br /><br />
                “I wanted to integrate the “know your worth” idea that I personally was worth more; that my clients were worth more – and together, self-care was at the heart of it all.
                <br /><br />
                I started teaching 8 or so classes per week in Banbridge Rugby Club, with one week of free trials to get me started, and by the end of January had 22 monthly members.
                <br /><br />
                Due to word of mouth, by March this doubled and by May, we had to look at securing our own premises locally, in order to hold the volume of classes we needed to – as well as employing another instructor.
                <br /><br />
                Trisha Camely came on board, and has been a massive asset to Cura Fitness. Having been a member herself, the girls all knew her and feedback was great from her classes.”
                <br /><br />
                <blockquote>There are no cliques, no posing in front of mirrors and each person that comes through the door is made to feel welcome.</blockquote>

                Liz believes there are several reasons why Cura Fitness has been such a success story:
                <br /><br />
                “It is because the results have been brilliant and speak for themselves. There are no cliques, no posing in front of mirrors and each person that comes through the door is made to feel welcome. Also, during each class, the girls are monitored and instructed on technique.
                <br /><br />
                <blockquote>When each exercise is completed correctly, the results start to show.</blockquote>

                One of our members lost 45 inches from June until December – doing 4 classes with us per week! This was with adapting certain exercises, which I think is something we are really good at as we treat each person as an individual.
                <br /><br />
                We have recently decided to become a female only business, as we want our members – all shape, sizes, ages and backgrounds to feel safe and welcome. We have ladies from the age of 17 right up until mid 60’s attend classes, and all know what they can and cannot do.
                <br /><br />
                I also believe that because we are constantly mixing things up and not teaching the same classes over and over, that no one gets bored and on top of that the classes are only 30 minutes long.”

            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default AboutPage