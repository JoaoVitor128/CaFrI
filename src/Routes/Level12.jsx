import Tips from "../Components/Tips"

import silenciosoPerry from "../assets/silenciosoPerry.png"

const Level12 = () => {
    return (
        <div>
            <h1>Level 12 - Em seus olhos</h1>
            <Tips text={"The SilentEye called him over here"} />
            <div className="container">
                <img src={silenciosoPerry} alt="" />
                <p>Fora o ornintorrinco</p>
                <p className="secondary">És ti ganho em grafia?</p>
            </div>
        </div>
    )
}

export default Level12