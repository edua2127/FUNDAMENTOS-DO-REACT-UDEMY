const Events = () => {

    const primeiroEvento = (e) => {
        console.log(e)
        console.log("Acao do primeiro Evento")
    }

    const funcaoRenderizacao = (x) => {
        if (x) {
            return <h1> x é verdadeiro</h1>
        } else {
            return <h1>x é falso</h1>
        }
    }
    return(
        <div>
            <div>
                <button onClick={primeiroEvento}> Evento 1 - Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("funcao inline")}>Evento 2 - funcao inline</button>
            </div>
            <div>
                <button onClick={funcaoRenderizacao}></button>
            </div>
            {funcaoRenderizacao(true)}
        </div>
    )
}

export default Events