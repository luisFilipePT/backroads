import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import links from "../constants/links"
import socialIcons from "../constants/social-icons"

import styles from "../css/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink key={index} to={item.path} fade>
              {item.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        { socialIcons.map((item, index) => {
          return (
            <a key={index} href={item.url} rel="noopener noreferrer">
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all rights reserved
      </div>
    </footer>
  )
}

export default Footer
