import React from 'react'

const HomeOwnerName = ({name}) => {
  const splitedName = name.split(' ')
  return (
    <h3 className="house-owner-name">
      {splitedName.map((wordsplit, index) => (
        <span style={{display: 'block'}}>
          {wordsplit}
          {index !== splitedName.length - 1 ? <br></br> : null}
        </span>
      ))}
    </h3>
  )
}

export default HomeOwnerName
