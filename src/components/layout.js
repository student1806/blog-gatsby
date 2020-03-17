import React from "react"

import layoutStyle from "./layout.module.css"
import Header from "./header"
import Aside from "./aside"

export default ({ children }) => {
  return (
    <>
      <Header />
      <div className={layoutStyle.layout}>{children}</div>
      <div className={layoutStyle.aside}>
        <Aside />
      </div>
    </>
  )
}

// todo:
//Header -> style
// Footer
//Aside
