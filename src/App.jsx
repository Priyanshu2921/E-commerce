import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './button'
import { Likebutton } from './likebutton'
import {MultiCounter} from './Multi-counter'



function App(){
  return(
    <>
    <div><Counter/></div>
    <hr></hr>
    
    <Likebutton/>
    <hr></hr>
    <div id="core-concepts">
    <MultiCounter/></div>
    <hr></hr>
  




    
    </>
  )
}






export default App;
