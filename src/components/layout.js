import React from "react"

import Header from "./header"

export default ({ children }) => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Header />
      {children}
    </div>
  )
}

// todo:
//Header -> style
// Footer
//Aside
