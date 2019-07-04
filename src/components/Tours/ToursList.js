import React, { useState, useEffect } from "react"

import Title from "../Title"
import Tour from "../Tours/Tour"

import styles from "../../css/items.module.css"

const ToursList = (props) => {
  const [ tours, setTours ] = useState([])
  const [ sortedTours, setSortedTours ] = useState([])

  useEffect(() => {
    setTours(props.tours.edges)
    setSortedTours(props.tours.edges)
  }, []);

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours"/>
      <div className={styles.center}>
        { sortedTours.map(({node}) => {
          return <Tour key={node.contentful_id} tour={node}/>
        }) }
      </div>
    </section>
  )
}

export default ToursList