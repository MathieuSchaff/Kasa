import React from 'react'
import './slider.scss'
import {ReactComponent as LeftChevron} from '../../assets/house/left-chevron.svg'
import {ReactComponent as RightChevron} from '../../assets/house/right-chevron.svg'

const Slider = ({pictures}) => {
  const [currentImage, setCurrentImage] = React.useState(0)
  const length = pictures?.length
  const prevSlide = () => {
    if (currentImage === 0) {
      setCurrentImage(length - 1)
    } else {
      setCurrentImage(currentImage - 1)
    }
  }
  const nextSlide = () => {
    if (currentImage === length - 1) {
      setCurrentImage(0)
    } else {
      setCurrentImage(currentImage + 1)
    }
  }

  return (
    <section className="slider">
      <LeftChevron onClick={prevSlide} className="arrow leftArrow" />
      {pictures.map((picture, index) => {
        return (
          <div
            key={index}
            className={`slide ${index === currentImage ? 'active' : ''}`}
          >
            {index === currentImage && (
              <img key={index} src={picture} alt="" className="imageSlider" />
            )}
          </div>
        )
      })}
      <RightChevron onClick={nextSlide} className="arrow rightArrow" />
    </section>
  )
}

export default Slider
