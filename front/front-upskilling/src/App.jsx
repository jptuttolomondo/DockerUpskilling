import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {
console.log('VITE_IP_VM: ',import.meta.env.VITE_IP_VM)
const VITE_IP_VM=import.meta.env.VITE_IP_VM
const [datosAMostrar,setDatosAMostrar]=useState([])

async function  handleClick(payload){
   let sale= await axios.get(`http://${VITE_IP_VM}/${payload}`)
      setDatosAMostrar(sale.data.data)
     return sale.data
           
}

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
          </div>
  )
}

export default App
