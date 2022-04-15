import React from 'react'

import './banner.scss'
import useWindowDimensions from '../../utils/useWindowDimensions'
export const BannerHome = () => {
  const {width} = useWindowDimensions()
  return (
    <div className="banner banner-home">
      <p> Chez vous, {width < 600 ? <br></br> : null} partout et ailleurs</p>
    </div>
  )
}
export default BannerHome
