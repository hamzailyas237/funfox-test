import React from "react"
import styles from "./weekTwo.module.css"
import Background from "../../components/background/Background"
import CaptionImage from "../../components/captionImage/CaptionImage"
import sunnyDay from "../../assets/sunny day.png"
import coldNight from "../../assets/cold night.png"
import alarmClock from "../../assets/alam clock.png"
import homeIcon from "../../assets/home.png"

const WeekTwo = () => {
  const images = [
    { image: sunnyDay, text: "Sunny day at a beach" },
    {
      image: coldNight,
      text: "A cold rainy night in a haunted house in October",
    },
  ]
  return (
    <div>
      <div className="relative">
        <Background />
      </div>
      <div className={styles.week_two_container}>
        <h2>
          Can you figure out the definition of setting from the following
          examples?
        </h2>
        <h3>(take a minute to think about this)</h3>
        <div className={styles.caption_image}>
          {images.map((data, index) => {
            return <CaptionImage key={index} data={data} />
          })}
        </div>

        <h3>
          So, what do you think the definition of setting is? Any guesses?
        </h3>

        <div className={styles.answer_area_container}>
          <h3>Any guesses?</h3>
          <p className={styles.answer_area}>
            <hr />
          </p>
          <div className={styles.hint_container}>
            <p>Hint:</p>
            <img className={styles.hint_image} src={alarmClock} alt="image" />
            <img className={styles.hint_image} src={homeIcon} alt="image" />
          </div>
        </div>

        <h3 className={`${styles.summary} flex text_white`}>
          Setting is the time
          <img width="35" height="35" src={alarmClock} alt="image" />
          and place
          <img
            width="35"
            height="35"
            className={styles.hint_image}
            src={homeIcon}
            alt="image"
          />
          of a story. It often answers the questions: when? and where?
        </h3>

        <h3>
          The time of the story could be in the past, future, day, night, summer
          or winter. A story may take place in a school, a mall, a desert, an
          airplane or in a variety of other places.
        </h3>
      </div>
    </div>
  )
}

export default WeekTwo
