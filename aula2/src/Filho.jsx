export default function Filho(props) {
    const dados = props.usuarios;
    return(
        <div>
            <h2>Dados do Usuario:</h2>
            <ul>
                {dados.map((item)=>(
                    <li key={item.nome}>
                        {item.nome}-{item.idade}
                    </li>
                ))}     
            </ul>
        </div>
    )    
}