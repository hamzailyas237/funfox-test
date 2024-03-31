import React, { useEffect } from "react"
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom"
import WeekOne from "../pages/weekOne/WeekOne"
import WeekTwo from "../pages/weekTwo/WeekTwo"

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="week/1" />} />
      <Route path="/week/:weekno" element={<WeekComponent />} />
    </Routes>
  )
}

export default Navigation

function WeekComponent() {
  const { weekno } = useParams()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  let componentToRender
  switch (weekno) {
    case "1":
      componentToRender = <WeekOne />
      break
    case "2":
      componentToRender = <WeekTwo />
      break
    default:
      componentToRender = <h1 className="text_center">Page Not Found</h1>
  }

  return componentToRender
}
