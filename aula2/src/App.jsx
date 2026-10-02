import Curso from './Curso.jsx';
import Aluno from './Aluno.jsx';
import Usuario from './Usuario.jsx';


export default function App() {
  return(
    <div>
       <h1>Aula2-Props em React</h1>
       <Curso nome="React"/>
       <Aluno nome="Roni" email="r@gmail.com" cpf="123"/>
       <Usuario/>
    </div>
  )
}