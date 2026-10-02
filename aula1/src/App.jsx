import Exemplo from './components/Exemplo.jsx';
import Times from './components/Times.jsx';
import Numero from './components/Numero.jsx';
export default function App(){
  const nome = "Roni";
  const converter = nome.toUpperCase();

  function soma(a,b) {
    return a+b;
  }

  return(
    <div>
      <h1>Introdução ao React</h1>
      <p>Aula de teste {converter}</p>
      <p>Soma:{2+4} </p>
      <p>Soma:{soma(10,100)}</p>
      <Exemplo/>

      <Times/>
      <Numero/>
    </div>
  )
}