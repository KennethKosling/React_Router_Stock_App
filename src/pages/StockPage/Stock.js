import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import stocks from "../../data";

export default function Stock() {
    const [stock, setStock] = useState({});

    const { symbol } = useParams();

    const findBySymbol = () => {
        setStock(stocks.find(e => {
            return(
                e.symbol === symbol
            )
        }))
    }

    useEffect(() => {
        findBySymbol();
    }, []);

    return (
        <div>
            <h1>Stock info for</h1> 
            <span className='show-name'>{stock.name}</span>
            <h1>Symbol: {stock.symbol}</h1>
            <h1>Price: {stock.lastPrice}</h1>
            <h1>Change: {stock.change}</h1>
            <h1>High: {stock.high}</h1>
            <h1>Low: {stock.low}</h1>
        </div>
    )
}