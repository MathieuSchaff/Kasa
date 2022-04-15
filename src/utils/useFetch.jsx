import {useEffect, useState} from 'react'
import getHouse from './getHouse'
import {useNavigate} from 'react-router-dom'
export function useFetch(url, option) {
  console.log('enter usefetch:')
  const [data, setData] = useState(null)
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(true)

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        const data = await response.json()
        if (option != undefined) {
          const house = getHouse(data, option)
          if (!house || !house) {
            navigate('/404')
          }
          setData(house)
        } else {
          setData(data)
        }
      } catch (err) {
        navigate('/404')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return {isLoading, data, error}
}
