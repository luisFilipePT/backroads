import React from "react"
import Title from "../Title"

import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us"/>
      <div className={styles.center}>
        <form action="https://formspree.io/l.oliveira@xgeeks.io" method="POST">
          <div>
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" className={styles.formControl} placeholder="jonh smith"/>
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" className={styles.formControl} placeholder="jonh@smith"/>
            <label htmlFor="message">message</label>
            <textarea rows="10" name="message" id="message" className={styles.formControl} placeholder="hello there"/>
          </div>
          <div>
            <input type="submit" value="submit here" className={styles.submit}/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact