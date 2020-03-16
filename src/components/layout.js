import React from "react"

import layoutStyle from "./layout.module.css"
import Header from "./header"

export default ({ children }) => {
  return (
    <>
      <Header />
      <div className={layoutStyle.layout}>{children}</div>
      <aside className={layoutStyle.aside}>
        <h3>I am here</h3>
      </aside>
    </>
  )
}

// todo:
//Header -> style
// Footer
//Aside
