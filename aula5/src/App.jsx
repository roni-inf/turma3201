
import { useState, useEffect } from "react";
export default function App() {
 const[contador,setContador] = useState(0);
 const[hora, setHora] = useState(new Date())

 useEffect(()=>{
  setInterval(()=>{
    setHora(new Date())
  }, 1000)
 })

 return(
  <div>
    <h2>Relogio Digital</h2>
    <p>{hora.toLocaleTimeString()}</p>
  </div>
 )
}


