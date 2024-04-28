import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Pilates extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Pilates"
          keywords={[`cura fitness`, `pilates`]}
        />
<div className="Hero BootcampHero">
  <h1>Pilates</h1>
</div>

<div className="Column">
          <div className="MainContent">
            <div className="u-textCenter">

              <h2>Strengthen and Restore your Body to Balance.</h2>

              <hr className="style1" />

            </div>

            <div className="row">

                <div className="col-6">
                <h2>What is Pilates?</h2>
                Pilates was developed and first practised in the 1920s by Joseph and Clara Pilates in their gym in New York City.
                <br /><br />
                Much more than just a modern way to build a strong core, Pilates is a 
                holistic whole body exercise system. It is designed to address underlying structural imbalances in your body, which can 
                cause on-going chronic pain and difficulty with movement.

                <br /><br />
                Many physiotherapists and GPs recommend Pilates as one of the most effective forms of exercise available today.


                <h2>How does Pilates work?</h2>
                Pilates uses whole body movement, targeting specific muscle groups, 
                to re-educate movement patterns and rebalance the body's underlying muscular and structural system.
                <br /><br />
                You will be performing specific, controlled movements, guided by one of our highly qualified Pilates instructors.
                <br /><br />
                Improving your posture and alignment and correctly balancing musucular tensions, Pilates will help:
                <br /><br />
                <ul>
                    <li>
                    Get your body moving in a more correct way.
                    </li>
                    <li>
                    Improve your posture and overall fitness.
                    </li>
                    <li>
                    Relieve tension throughout your body.                
                    </li>
                    <li>
                    Rehabilitate and prevent further injuries.
                    </li>
                    <li>
                    Promote mindfulness and body awareness.                
                    </li>
                </ul>


            </div>

                <div className="col-6">

                <h2>Who is Pilates for?</h2>
                We cater for all ages, abilities, and fitness levels in our Pilates classes. 
                <br /><br />
                Exercises and movements can be adapted for those with particular requirements.
                <br /><br />

                Our Thursday sessions focus more on the beginner level and would be especially suitable if you:
                <br /><br />
                <ul>
                    <li>
                    Have poor posture.
                    </li>
                    <li>
                    Back or hip pain.
                    </li>
                    <li>
                    Muscle imbalances.                
                    </li>

                </ul>


                <h2>When do you run Pilates classes?</h2>
                Pilates at Cura Fitness is block-booked in advance for a monthly group of sessions.
                <br /><br />
                We run Pilates classes on:
                <br /><br />
                Tuesday evening at 6:45pm - 7.30pm<br />
                Thursday morning at 5.45am - 6.30am<br />
                Thursday evening at 6.45pm - 7.30pm


               <h2>How do I sign up for Pilates?</h2>

                To get more details about our next monthly block, please click the button below and fill in the form with your contact details.
                <br /><br />
                <a href="/contact/" className="goldbutton">Register Your Interest</a>


               </div>

            </div>


            <div className="Column">
          <div className="MainContent">

            <div className="u-textLeft">
            
            <h2 className="u-textCenter">Want to hear what can be achieved by doing Pilates at Cura Fitness?</h2>
            <hr className="style1" />

            Here is some recent feedback and testimonials from our Pilates clients, showing how much progress 
            they have made at our Pilates classes over the past few months.
            <br /><br />

            <hr className="style1" />

              <br /><br />

              "Liz, re pilates. I just wanted to give a bit of feedback as requested.
                I have in the past struggled with breathing and form in plates but your style of instruction made everything clear. I learn better in a visual way and your descriptions of how the spine and body move really helped. The descriptive use of objects eg tomato, grape and beach all were great for me. As you know I have had issues with a tight hip and it always feels better after pilates with you.
                But the overall biggest thing for me was that somewhere between the 2nd and 3rd session with your guidance and repetition, the breathing  pattern just clicked with me. This made an amazing difference to how I benefited from the sessions.
                You are confident, enthusiastic and have a natural warmth with people. You will be an amazing pilates instructor."
              <br /><br />
              "Liz’s instruction during Pilates class is very clear and precise. It is very refreshing to know how the exercises are helping my body.  Liz explains everything in detail. I feel I’ve progressed so much since having Liz’s instruction. My breathing is more regulated during the class.  My leg muscles get very tight from running and walking but I feel they are much more stretched and the moves have really helped my sciatic nerves from my hip down my leg. I feel I’m walking out of Liz’s Pilates class a foot taller. Liz is an amazing instructor and I always get a really good nights sleep after Liz’s evening class. Liz has the ability to push and encourage me to obtain my best stretches for my body and at the same time makes the class enjoyable and relaxed. Liz is very unique in her approach in that I feel I’m the only one in the class even though the room is full. Well done Liz and I can wait to attend future classes."
              <br /><br />
              "Thank you Liz. I really enjoyed your class. Your demonstration of practices throughout the class was brilliant and easy to follow being attentive to each person alongside encouraging proper breathing and posture. The class was very inviting and relaxed. Loved it! Wishing you success for the future."
              <br /><br />
              "I could see your confidence increased with each session... you have provided very clear instructions that allowed me the time to focus on my breathing and movements. I felt more informed during the sessions and was aware of the seemless flow of each movement...you also highlighted the importance of engaging my core to assist with balance something I only recently was aware of...I did enjoy the precision of threading the needle. I definitely feel more movement in my back and I used your flowing head/neck movement following a neck strain...it worked a treat...
                Eliz you're so dedicated to your craft and clients and this spills over in Pilates and Bootcamp 
                Thanks so much I feel more like my younger self having attended your sessions x"
              <br /><br />
              "Sorry for not getting this to you sooner 
                I’m going to miss Liz’s Thursday night Pilates class and can’t wait to sign up for more. She is so knowledgeable of all the exercises and muscles, always demonstrating and providing adaptations for injuries if needed. It was good to see that each week she asked the class of any new injury. Her attention to form as she went round the class to make corrections was very helpful as it really made a difference for me.  Even in the short space of time I can see improvements to my posture, sleep and muscles feeling  stretched yet relaxed. Thanks for the class Liz and as above sign me up when your class starts"
              <br /><br />
              "I thought you were excellent! I've been doing pilates for over 2 years now and you're the first instructor (6 before you!) that's properly explained breathing to me, as well as correcting form with roll downs. You're instructions are clear and really explain the purpose of the movement and what we should be feeling. All in all your classes have been excellent and I've really enjoyed them. Thank you 😊"
              <br /><br />
              "I attended a Pilates class with Liz. I wasn’t sure what to expect having never attended a Pilates class before, but I really enjoyed the experience. Liz put me at ease even before I arrived, answering my questions that I had text her. The class itself was relaxed and enjoyable. The instructions given were clear and Liz reinforced them when going round us individually and correcting us here and there. I would definitely be interested in further Pilates classes, especially with an instructor who is so knowledgable and personable."
              <br /><br />
              "Liz, 
                I found the Pilates helpful with my fibromyalgia and my mobility, it was great to come away with knowledge provided by you about how to do the exercises properly. 
                I found it reassuring that you asked and were aware of my medical conditions and that you took into consideration any difficulties that I had and wee able to provide adaptations to assist me and ensure that I got the most out of these sessions  .
                At the sessions that I attended you were clear on your instruction regarding how to do the exercises and explained the benefits of same. The Pilates was definitely beneficial in helping me to relax and provided assistance with my flexibility and mobility."
              <br /><br />


            </div>
          </div>
        </div>

          </div>
        </div>

      </Layout>
    )
  }
}

export default Pilates

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`