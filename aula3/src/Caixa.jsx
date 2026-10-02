export default function  Caixa(props) {
    const caixa = {
        width:"100px",
        height:"120px",
        backgroundColor: props.cor
    }

    return(
        <div>
            <h2>Curso de React</h2>
            <div style={caixa}>
                <p>Cpti</p>
            </div>
        </div>
    )
}