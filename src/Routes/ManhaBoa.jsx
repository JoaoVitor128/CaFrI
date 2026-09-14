import { Link } from "react-router-dom"

const ManhaBoa = () => {
    const random = Math.floor(Math.random() * 5)
    const possibilities = ["eveets", "anomalia", "noses", "cucuta", "aviao"]

    return (
        <div>
            <h1>Level ?? - Boa Tentativa</h1>
            <div className="coontainer">
                <p>Seria muito bom se realmente fosse a resposta de algum level né</p>
                <p className="secondary">Fiquei com dó, toma uma resposta aleatória aí: {possibilities[random]}, mas considere que é mais divertido resolver da forma planejada</p>
                <Link to="/"><button>Voltar</button></Link>
            </div>

        </div>
    )
}

export default ManhaBoa