import React from 'react'
import Image from '../image'
import { convertNumberToString, mixMultipleData } from '../utils'
import logo from './logo.png'
import './index.css'

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Image className="App-logo" src={logo} alt="logo" />
        <p>
          Run <code>`npm test`</code> to validate your types
        </p>
        Use TypeScript. Stay JavaScript.
        <br />
        <br />
        <code>Convert number to string: {convertNumberToString(1100)}</code>
        <code>
          {mixMultipleData({
            name: 'Joe',
            age: 18,
            fruits: [
              {
                name: 'bananas',
                calories: 350,
              },
            ],
          })}
        </code>
      </header>
    </div>
  )
}

export default Home
