import React from 'react'

export default ({title, description,deadline, time,closeButton, }) =>
  <React.Fragment>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>{deadline}</p>
    <p>{time}</p>
  </React.Fragment>
