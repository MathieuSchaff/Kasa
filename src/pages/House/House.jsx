import './house.scss'
import React from 'react'
import {useParams} from 'react-router-dom'
import {useFetch} from '../../utils/useFetch'
import {useEffect} from 'react'
import Slider from '../../components/Slider/Slider'
import Accordion from '../../components/Accordion/Accordion'
import HomeOwnerName from '../../components/HomeOwnerName/HomeOwnerName'
import Rating from '../../components/Rating/Rating'
const House = () => {
  let params = useParams()

  const {isLoading, data, error} = useFetch('../data.json', params.houseId)
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {data && (
        <main className="house-main">
          <Slider pictures={data.pictures} />
          <div className="house-container">
            <div className="house-firstBlock">
              <h2 className="house-title">{data.title}</h2>
              <p className="house-location">{data.location}</p>
              <div className="house-tags">
                {data.tags.map(tag => (
                  <div className="house-tag">
                    <p className="house-tag-text">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="house-secBlock">
              <div className="house-owner">
                <HomeOwnerName name={data.host.name} />
                <img
                  src={data.host.picture}
                  className="house-owner-picture"
                  alt="profile on the owner"
                />
              </div>
              <div className="house-starContainer">
                <Rating rating={data.rating} />
              </div>
            </div>
          </div>
          <div className="accordion-container">
            <Accordion title={'Description'} content={data.description} />
            <Accordion title={'Equipement'} content={data.equipments} />
          </div>
        </main>
      )}
    </div>
  )
}

export default House
