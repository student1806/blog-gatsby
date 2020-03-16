import React from "react"
import { Link } from "gatsby"

import headerStyle from "./header.module.css"

export default () => {
  return (
    <header className={headerStyle.header}>
      <Link to={"/"} className={headerStyle.title}>
        <h2>My blog</h2>
      </Link>
      <div>placehold for image</div>
    </header>
  )
}
