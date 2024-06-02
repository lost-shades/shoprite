import React from 'react'
import Styles from '../styles/Shoprite.module.css'

export const Feedback = () => {
  return (
    <main className={Styles.FeedbackMain}>
      <section className={Styles.FeedbackSections}>
        <section className={Styles.FeedbackSection1}>
          <div className={Styles.FeedbackSection1Div1}>
            <h3>What they say about us</h3>
            <div className={Styles.FeedbackSection1Div2}>
              <div>
              <img src="user1.png" alt="" />
              </div>
              <div>
                <img src="Star1.png" alt="" />
                <img src="Star1.png" alt="" />
                <img src="Star1.png" alt="" />
                <img src="Star1.png" alt="" />
                <img src="Star2.png" alt="" />
              </div>
              <p>Slate helps you see how many more days you need to work to 
                  reach your financial goal.</p>
                <div>
                  <p>Regina Miles</p>
                  <p>Designer</p>
                </div>
            </div>
          </div>
          <section className={Styles.FeedbackSection2}>
            <div className={Styles.FeedbackSection2Div}>
              <img src="unsplash1.png" alt="" />
              <img src="unsplash2.png" alt="" />
              <img src="unsplash3.png" alt="" />
              <img src="unsplash4.png" alt="" />
              <img src="unsplash5.png" alt="" />
              <img src="unsplash6.png" alt="" />
              <img src="unsplash7.png" alt="" />
              <img src="unsplash8.png" alt="" />
              <img src="unsplash9.png" alt="" />
            </div>
          </section>
        </section>
      </section>
    </main>
  )
}
