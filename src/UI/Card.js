import React from 'react'

const Card = (props) => {
  const {className, children} = props;
  return (
    <article className={`card ${className}`}>
      {children}
    </article>
  )
}

export default Card