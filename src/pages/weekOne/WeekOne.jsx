import React from "react"
import styles from "./weekOne.module.css"
import kidThinking from "../../assets/kidThinking.png"
import storyElement1 from "../../assets/storyElement1.png"
import storyElement2 from "../../assets/storyElement2.png"
import storyElement3 from "../../assets/storyElement3.png"
import storyElement4 from "../../assets/storyElement4.png"
import storyElement5 from "../../assets/storyElement5.png"
import weekOneSummary from "../../assets/week1Summary.png"
import Background from "../../components/background/Background"

const WeekOne = () => {
  return (
    <div>
      <div className="relative">
        <Background />
      </div>
      <div className={styles.week_one_container}>
        <h1 className={`${styles.heading} text_white`}>
          Elements of Story Writing
        </h1>
        <h3>
          Welcome to term 2 of Writers Club. Are you excited for this amazing
          journey? Over the next week, we will be practicing the different
          elements of story writing. Our aim is to make stories more interesting
          and exciting.
        </h3>

        <div className={styles.elements_of_story}>
          <div className={`${styles.elements_of_story_inner} text_white`}>
            <h3>
              There are elements which make the foundation for story writing. An
              element is an essential part of something and every fiction story
              has the same key elements:
            </h3>
            <img
              style={{ height: "100px", width: "110px" }}
              src={kidThinking}
              alt="kid"
            />
          </div>
          <div className={styles.elements_of_story_images}>
            <img
              className={styles.story_element}
              src={storyElement1}
              alt="story element"
            />
            <img
              className={styles.story_element}
              src={storyElement2}
              alt="story element"
            />
            <img
              className={styles.story_element}
              src={storyElement3}
              alt="story element"
            />
            <img
              className={styles.story_element}
              src={storyElement4}
              alt="story element"
            />
            <img
              className={styles.story_element}
              src={storyElement5}
              alt="story element"
            />
          </div>
        </div>

        <h3>
          You must be familiar with some of these. If not, do not worry! we will
          cover all these elements as we go along.
        </h3>

        <div className={styles.summary_container}>
          <img
            className={styles.summary_image}
            src={weekOneSummary}
            alt="summary"
          />
          <div className={styles.summary_container_text}>
            <h3>
              For today’s lesson, we will try to understand and practice writing
              the setting for our stories.
            </h3>
            <h3>The setting is an important element of every fiction story.</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeekOne
