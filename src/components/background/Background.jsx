import React from "react"
import pencil from "../../assets/pencil.png"
import scale from "../../assets/scale.png"
import bag from "../../assets/bag.png"
import bookClose from "../../assets/bookClose.png"
import bookOpen from "../../assets/bookOpen.png"
import mortarboard from "../../assets/mortarboard.png"
import logo from "../../assets/logo.png"
import week1 from "../../assets/week1.png"
import user from "../../assets/user.png"
import info from "../../assets/info.png"
import numbering from "../../assets/numbering.png"
import back from "../../assets/back.png"
import forward from "../../assets/forward.png"
import styles from "./background.module.css"
import { useNavigate } from "react-router-dom"

const Background = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.background_container}>
      <div className="align_center">
        <img className={styles.logo} src={logo} alt="image" />
        <img className={styles.week} src={week1} alt="image" />
      </div>

      <div className={styles.inner_container}>
        <div className={styles.flex_column_between}>
          <img className={styles.pencil} src={pencil} alt="image" />
          <img className={styles.bag} src={bag} alt="image" />
          <img className={styles.book_open} src={bookOpen} alt="image" />
        </div>

        <div className={styles.flex_column_between}>
          <img className={styles.scale} src={scale} alt="image" />
          <img className={styles.book_close} src={bookClose} alt="image" />
          <img className={styles.mortarboard} src={mortarboard} alt="image" />
        </div>
      </div>

      <div className={styles.background_footer}>
        <img className={styles.footer_icon} src={user} alt="image" />
        <div className={styles.background_footer_inner}>
          <img
            className={styles.footer_icon}
            src={back}
            alt="image"
            onClick={() => navigate("/week/1")}
          />
          <img className={styles.numering_image} src={numbering} alt="image" />
          <img
            className={styles.footer_icon}
            src={forward}
            alt="image"
            onClick={() => navigate("/week/2")}
          />
        </div>
        <img className={styles.footer_icon} src={info} alt="image" />
      </div>
    </div>
  )
}
export default Background
