const TemplateExpressions = () => {
    const data = {
        name: 'Eduardo',
        age: 21,
        job: 'Software Engineer'
    }
    return (
        <div>
            <h1>Ola meu nome é {data.name}, tenho {data.age} e trabalho com {data.job}</h1>

        </div>
    )
}

export default TemplateExpressions