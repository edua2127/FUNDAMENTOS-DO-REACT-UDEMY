const Challenge = () => {
    let valor1 = 5
    let valor2 = 3
    const soma = () =>{
        console.log(valor1 + valor2) 
    }
    return (
        <div>
            <h1>Valor 1: {valor1}</h1>
            <h1>Valor 2: {valor2}</h1>

            <button onClick={soma}>Clique aqui para ver a soma</button>
           
        </div>
    )
}

export default Challenge;