import './App.css'
import React from 'react'
import {useEffect, useState} from 'react'
import data from './data/data.json'
// export function useFetch(url) {
//   const [data, setData] = useState({})

//   const [isLoading, setLoading] = useState(true)

//   const [error, setError] = useState(false)

//   useEffect(() => {
//     if (!url) return

//     setLoading(true)

//     async function fetchData() {
//       try {
//         const response = await fetch(url, {
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//         })

//         const data = await response.json()
//         console.log(data)
//         setData(data)
//       } catch (err) {
//         console.log(err)

//         setError(true)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [url])

//   return {isLoading, data, error}
// }
function App() {
  const [data, setData] = useState(data)

  useEffect(() => {
    console.log(data)
  }, [])

  return <div className="App">{data && <div> aoeo </div>}</div>
}

export default App
