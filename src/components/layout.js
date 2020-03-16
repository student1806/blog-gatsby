import React from "react"

import Header from "./header"

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

// todo:
//Header -> style
// Footer
//Aside
