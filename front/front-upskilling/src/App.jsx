//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useState } from 'react'
//import { useState } from 'react'

function App() {

const [datosAMostrar,setDatosAMostrar]=useState([])

async function  handleClick(payload){
   let sale= await axios.get(`http://gateway:8000/${payload}`)
    //console.log(sale.data)
    setDatosAMostrar(sale.data.data)

     return sale.data
            
}
console.log(datosAMostrar)
//console.log('object.entries',Object.entries(datosAMostrar))
  return (
      <div className="card">    
        <h1>Prueba de microservicios en virtual Machine</h1>
        <button name='characters'
        onClick={(e)=>handleClick(e.target.name)}>prueba get/characters </button><p></p>
        <button name='films'
        onClick={(e)=>handleClick(e.target.name)}>prueba get/films </button><p></p>
        <button name='planets'
        onClick={(e)=>handleClick(e.target.name)}>prueba get/planets </button>
  <ul>
  <li>Nombres:</li>
  {datosAMostrar.map((e) => (
    <li key={e._id}>
       {e.name?e.name:e.title}{'  films: '}{e.films?.map(elem=>elem.title).join(' ')}
    </li>

  ))}
</ul>
       <div></div>
       <div></div>

      </div>

 
  )
}

export default App
