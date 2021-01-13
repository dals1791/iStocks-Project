import React, {useState, useEffect} from "react"


const Stock = (props) => {
    const apiKey="80fbb86f3313c763b5d47f29fe35416a"
    const symbol =props.match.params.symbol
    const url =`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`
    
    const [stock, setStock]= useState(null)
    const getStock = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setStock(data)
    }
    useEffect(()=> {
        getStock()
    }, [])
    
    const loaded = () => {
        return(
            <div>
                <h1>
                    {stock[0].name}
                </h1>
                <h2>${stock[0].price} ({stock[0].change.toFixed(2)}%)</h2>
            </div>
        )
    }
    const loading = () =>{
        return <h1>Loading...</h1>
    }
    
    return(
        stock ? loaded() : loading()
    )
}
export default Stock