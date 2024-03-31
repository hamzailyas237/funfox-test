import React from "react"
import styles from "./captionImage.module.css"

const CaptionImage = ({ data }) => {
  return (
    <div className={styles.caption_img_container}>
      <img className={styles.caption_img} src={data?.image} alt="image" />
      <h3>{data?.text}</h3>
    </div>
  )
}

export default CaptionImage
