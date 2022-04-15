import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import './rating.scss'
const Rating = ({rating}) => {
  const numberRating = parseInt(rating, 10)
  const array = ['a', 'b', 'c', 'd', 'e']
  return (
    <>
      {array.map((object, index) => {
        return (
          <FontAwesomeIcon
            icon={faStar}
            className={index < numberRating ? 'goodrate' : 'badrate'}
          />
        )
      })}
    </>
  )
}

export default Rating
