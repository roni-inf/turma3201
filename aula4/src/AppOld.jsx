import {useState} from 'react';

export default function  App() {
  const[valor, setValor] = useState(100);
  const[nome, setNome] = useState("José");
  
  const[texto,setTexto]= useState("");

  function mudarTexto(event){
    setTexto(event.target.value);
  }

  function alterarNome() {
    setNome((nome) => 
      (nome === "José"?"Maria":"José"));
  }

  function  calcular() {
    setValor(valor * 2);
    console.log(valor);
  }

  return(
    <div>
      <h1>Exemplo hook useStates</h1>
      
      <input type="text" value={texto} onChange={mudarTexto} 
      placeHolder="Digite algo" />
      <p>Você digitou:{texto}</p>

      <p>Resultado:{valor}</p>
      <button onClick={calcular}>Calcular</button>
      <p>Nome:{nome}</p>
      <button onClick={alterarNome}>Trocar Nome

      </button>
    </div>
  )  
}