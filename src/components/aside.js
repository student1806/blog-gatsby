import React from "react"
import { Link } from "gatsby"

import asideStyle from "./aside.module.css"

export default () => {
  return (
    <>
      <div className={asideStyle.card}>
        <span className={asideStyle.card__backImg}>
          <img
            src="https://placekitten.com/100/100"
            className={asideStyle.card__img}
            alt="my-image"
          />
        </span>

        <div className={asideStyle.card__content}>
          <h3 className={asideStyle.card__title}>About me</h3>
          <p className={asideStyle.card_desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            hic sunt corrupti eius dolore!
          </p>
          <ul className={asideStyle.card__list}>
            <li className={asideStyle.card__item}>one</li>
            <li className={asideStyle.card__item}>two</li>
            <li className={asideStyle.card__item}>three</li>
          </ul>
          <button className={asideStyle.card__btn}>Visit the link</button>
        </div>
      </div>
    </>
  )
}
