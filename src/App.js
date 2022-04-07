import './App.css'
import React from 'react'
import {useEffect, useState} from 'react'
import data from './data/data.json'

function App() {
  useEffect(() => {
    console.log(data)
  }, [data])

  return <div className="App">{data && <div> aoeo </div>}</div>
}

export default App
