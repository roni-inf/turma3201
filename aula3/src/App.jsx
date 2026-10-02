import './App.css';
import Caixa from './Caixa';

export default function App(){

  const texto = {
    color:"aqua",
    fontSize:"28px"
  }

return(
  <div>  
    <h2 style={texto}>Cpti</h2>

    <h1 style={{color:"#f09"}} >Estilo Inline</h1>

     <h3> Exemplo CSS React</h3>

     <p className="titulo">Aula de Estilos</p>

     <p className="titulo2">Introdução ao Css</p>

     <Caixa cor = "blue"/>
  </div>
)

}