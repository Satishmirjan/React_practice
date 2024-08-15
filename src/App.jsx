import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockDetails from './components/ClockDetails'
import ClockHeading from './components/ClockHeading'
import ClockTime from './components/ClockTime'

export default function App() {
  return (<>
       <ClockHeading/>
       <ClockDetails/>
       <ClockTime/>
  </>)
}
