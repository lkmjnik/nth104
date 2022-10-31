


function Popular(){
    const getPopular = async () => {
        const api = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APPI_KEY}')
    }
    return <div>Popular</div>
}

export default Popular;