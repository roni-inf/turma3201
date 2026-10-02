export default function Numero(){
const numeros=[5,9,10,20,30,6];
const calcularSoma = numeros.reduce((total,numero)=>total+numero,0);
    return(
        <div>
            <h1>Soma de vetor:{calcularSoma}</h1>
        </div>

    )

}