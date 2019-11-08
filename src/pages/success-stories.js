import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


class SuccessStories extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Success Stories" 
          keywords={[`Cura Fitness`, `members`, `success`, `stories`]}
        />
    <div className="Hero SuccessHero">
      <h1>Success Stories</h1>
    </div>

      <div className="Column">
          <div className="MainContent">

            <div className="u-textLeft">
            
            <h2 className="u-textCenter">In their own words.</h2>
            <hr className="style1" />

            A collection of success stories from our members and clients, showing just what being a part of Cura Fitness has meant to them and their lives.
            <hr className="style1" />


            <div className="u-textCenter">
            <h2>Tina Gartland</h2>
            <img src="/images/tinagartland2-300x300.jpg" alt="Tina Gartland" />
            </div>

            <br /><br />
            The fabulous Tina Gartland is a different woman & has been with us since her trial week a year ago. She is part of the furniture, only missing classes to go on holiday, but ALWAYS working her training around her work schedule. She inspires others with her dedication. We are so proud of you Tina, & know Eva is too.
            <br /><br />
            Here is Tina’s testimonial as featured in Banbridge Chronicle:
            <br /><br />
            “I joined Cura Fitness in January 2018. At that time, due to bad health, I had gained a bit of weight which was getting me down!
            <br /><br />
            I had tried lots of different gyms, but hadn’t lost anything and was starting to loss hope! At Cura Fitness, I was made very welcome and at ease, as Liz was aware of my health conditions and told me to just go at my own pace and how to adapt the exercises that I wasn’t able to do!
            <br /><br />
            After a short space of time I could see my body shape changing, which encouraged me to keep at it! From I joined cura I have not only lost weight but my health both physically and mentally has improved. I also don’t feel like I am being judged for the things I can’t do as there are a lot of people who have health conditions which restricts what they can do, so everyone is so supportive!
            <br /><br />
            Through Cura I have made some lovely friends! My life has changed for the better which is all down to Cura Fitness and all their guidance and support”.
            <br /><br />

            <div className="u-textCenter">

            <h2>Charlene Ogle</h2>

            <img src="/images/charleneogle-300x300.jpg" alt="Charlene Ogle" />
            </div>

            <br /><br />
            Thank you to Charlene Ogle for her brilliant review below. We continue to be so very proud to have you as a member at Cura Fitness. You are driven, motivated & committed which is why you deserve these brilliant results.
            <br /><br />
            “I joined Cura Fitness almost one year ago and and am loving it and the results.
            I have tried many different gyms and exercise classes but never stuck them out, Cura Fitness changed all that. From the first time i entered Cura Fitness i was made to feel very welcome by both the Cura team and the other members and for once i didnt feel out of place in a gym setting.
            <br /><br />
            I attend Cura 3 times a week and do a variety of classes including circuits, core and RT24. There really is something to suit everyone.
            My body shape has really improved, im much more toned, so much fitter and above all so much happier in myself.
            <br /><br />
            I can’t recommend Cura Fitness highly enough, it is really great fun, good laugh and it works. The atmosphere is non judgemental and all the girls encourage each other.
            <br /><br />
            Thank you everyone at Cura Fitness for helping me achieve my goals”
            <br /><br />

            <div className="u-textCenter">
            <h2>Barbara McGaw</h2>
            <img src="/images/barbara_mcgaw-300x268.jpg" alt="Barbara McGaw" />
            </div>

            <br /><br />
            Barbara McGaw has been with us from our very first day at Banbridge Rugby Club a year ago. The difference in her has been unreal, both physically & fitness level. Proof that RT24 works when it’s principles are applied, & techniques are correct. We are SO proud of you Barbara!! Thank you for your testimonial.
            <br /><br />
            “I was 50 and totally unfit with mounting health problems, due to issues with my weight. I hadn’t been at a gym in over 30 years and by chance meet Liz at another fitness studio. She made me feel good about myself again, and wherever she said she was starting her own classes in Rugby club, I decided to join her and see how I got on – not really expecting to enjoy it, but thought I would support her for a while.
            <br /><br />
            1 year later I am doing 6 classes a week, loving it and losing inches – over 26 to date. But most importantly I am starting to love myself again. My health has improved 100% and I have made soo many new friends.
            <br /><br />
            Cura Fitness is not just a gym, or an exercise class, it is a wee hub where you are made to feel like a person. It doesn’t matter what shape you are, fit or a couch potato, everyone is made to feel like they can achieve something no matter how small.
            <br /><br />
            Cura is a way of life and each one of the trainers are there for u no matter what you need. Looking forward to 2019 and even better lifestyle with the help of Cura Fitness x”
            <br /><br />

            <div className="u-textCenter">
            <h2>Sarah McCahon</h2>
            <img src="/images/sarahmccahon2-300x300.jpg" alt="Sarah McCahon" />
            </div>

            <br /><br />
            Sarah McCahon, we are all SO proud of your progress in (almost) the last year. Sarah is so dedicated, that she was back in training on the 27th December as soon as we re-opened after the Christmas break. You deserve these fab results, Sarah, & you’re looking amazing!!
            <br /><br />
            Read Sarah’s testimonial below:
            <br /><br />
            “After feeling I needed to do something to lose weight, a friend recommended Cura to me and it honestly was the best decision I could have made to join in April 18. I have met some amazing people and made some life friends through the classes and instructors.
            <br /><br />
            They are always there to help motivate and give advice and are always there to help me along the way. Since joining, I have lost a total of 21.5 inches, have gained more confidence in myself and it has helped dramatically with my anxiety and overthinking.
            <br /><br />
            There is such a variety of classes to choose from each week and I would highly recommend Cura Fitness to anyone who wants and is willing to make a change in their life for the better. I could not speak highly enough of the instructors and honestly could not have got to where I am today without them.”
            <br /><br />

            <div className="u-textCenter">
            <h2>Linda Wills</h2>
            <img src="/images/linda_wills-196x300.jpg" alt="Linda Wills" />
            </div>

            <br /><br />
            Thank you so much for these fantastic photos Linda Wills along with your brilliant testimonial below. We love having you as part of Cura. You show such strength & dedication. Your body shape has changed completely & we are all so proud of you.
            <br /><br />
            “I joined Cura Fitness in March 2018 after winning a Facebook competition for one months free classes. Once i started i was instantly hooked. I hadn’t exercised in some time and was fearful getting back into exercise due to underlying health conditions, however i was worrying for nothing.
            <br /><br />
            The small group size suited me brilliantly and i felt like no-one was judging me if i was slow or didn’t know the exercises. Liz was always on hand to adjust any i was having difficulty with and i always felt that i left the classes feeling a great sense of achievement.
            <br /><br />
            Ten months later i am loving exercise again! I am stronger fitter and healthier than i have been in some time having lost over 35 inches to date and have a new found love of burpees and while i still have challenges at times i’m excited to see what 2019 brings. Thank you Cura!”
            <br /><br />

            <div className="u-textCenter">
            <h2>Audrey Docherty</h2>
            <img src="/images/audreydocherty-300x273.jpg" alt="Audrey Docherty" />
            </div>

            <br /><br />
            I am SO proud of this amazing lady, who I am privileged to call my friend, & one of the most kindest, loyal people I know – Audrey Docherty.
            <br /><br />
            She has been by my side from that first trial week in Jan ’18 at the Rugby Club & still attends her 3 morning classes every week, no matter the weather.
            <br /><br />
            35 Inches off to date!! 
            <br /><br />
            Some of Audrey’s biggest losses have been 7 Inches around her waist; 7 Inches off her lower abs; 7 Inches off her mid thigh. And still going strong. Below is her testimonial:
            <br /><br />
            “I have been attending Cura Fitness for a year now and I have to admit that I love it! I never thought I would be deliberately (without the help of my child!) waking up at 5am to go and do gym work. I had put on a lot of weight after having my child, my fitness levels were atrocious and I struggled to walk the dog without being out of puff.
            <br /><br />
            I have tightness in my joints which can make any jumping and some kinds of lifting very hard. I have left many gyms and classes previously due to being unsupervised and lifting badly or using equipment wrong, resulting in hurting my back or hip and then being too sore to return.
            <br /><br />
            Liz took all of this onboard and has helped me to adapt exercises to suit my body and ability, while still ensuring I get a serious full workout. The workouts are only half an hour and this means I am not missing out on precious time with my child yet still staying healthy.
            <br /><br />
            Liz ensures there are workouts at times of the day to suit working days and mums, and also to suit people who have school age children or tight schedules. Liz, Trisha and the team at Cura Fitness have become friends to me and I feel like I can talk to them about any issues or queries I may have, regarding my health, my fitness or ability to attend, or just to have a giggle with!
            <br /><br />
            I now have a set of ‘guns’ to be proud of and want my goal this year to work on my ‘mummy core’. Thank you to everyone at Cura Fitness for helping me to become a better me……and a huge thank you from my dog who loves being brought on a walk now as he gets a good hour at a fast trot!”
            <br /><br />

            <div className="u-textCenter">
            <h2>Nicola O'Neill</h2>
            <img src="/images/nicolaoneill-212x300.jpg" alt="Nicola O'Neill" />
            </div>

            <br /><br />
            “I could not recommend Cura Fitness enough. No matter what fitness level you are. The classes are a perfect size and Liz and the team are always there on hand if you ever have a problem or need that extra push.
            <br /><br />
            I am looking forward to what 2019 has in store for my fitness journey with Cura Fitness.“
            <br /><br />

            <div className="u-textCenter">
            <h2>Trisha Camely</h2>
            <img src="/images/trishacamely-300x291.jpg" alt="Trisha Camely" />
            </div>
            
            <br /><br />
            “I joined Cura Fitness last January as I didn’t feel good in my own skin, and I had no energy and wanted to do something for myself. I hated the thought of attending the ‘gym’. I also wanted something that I could enjoy and would fit around my busy family life.
            <br /><br />
            Cura Fitness was everything I needed. 30 minute classes with other women who were there for the same reasons as myself. It was also very clear that Liz cared about each individual person that attended the classes. Within 6 weeks, I was sleeping better and had more energy. Liz measured me and I had 8 inches off.
            <br /><br />
            In April, Liz approached me, asking if I would be interested in joining her team as a fitness instructor. I was taken aback, overwhelmed but so touched that she could see the potential in me, which at that point I couldn’t see in myself. I completed my level 2 fitness instructor course in May and went on to become an RT24 coach. It has been the best decision I ever made, I love teaching and helping the ladies to achieve their goals.“
            <br /><br />

          </div>
        </div>
      </div>

      </Layout>
    )
  }
}

export default SuccessStories

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`
