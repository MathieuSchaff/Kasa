import React from 'react'
import './card.scss'
import {Link} from 'react-router-dom'
const Card = ({title, pictures, id}) => {
  return (
    <Link to={`/house/${id}`}>
      <figure className="card">
        <img src={pictures[0]} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </Link>
  )
}

export default Card
