
export default function Times() {
    const times = ["Flamengo","Botafogo","Serrano","Fluminense"];

    const lista = times.map((time,i)=>(
        <li key={i}> {time} </li>
    ))
    
    return(
        <div>
            <h1>Lista de times</h1>
            <ul>
                {lista}
            </ul>
        </div>
    )
}