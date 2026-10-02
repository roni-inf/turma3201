import Filho from './Filho.jsx';

export default function Usuario() {
    const usuarios = [
        {"nome":"João", idade:39},
        {"nome":"Maria", idade:23},
        {"nome":"Matheus", idade:13},
        {"nome":"Sérgio", idade:45}
    ]

    return(
        <div>
            <Filho usuarios={usuarios}/>
        </div>
    )
}