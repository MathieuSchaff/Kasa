import React from 'react'
import './cardContainer.scss'
import Card from '../Card/Card'
import {useFetch} from '../../utils/useFetch'
const CardContainer = () => {
  const {isLoading, data, error} = useFetch('data.json')
  return (
    <main className="cardContainer">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {data && data.map(item => <Card key={item.id} {...item} />)}
    </main>
  )
}

export default CardContainer
