import { Link } from "react-router-dom";

export default function Nav(props){
    return(
        <div className="nav">
            <Link to="/">
                <div className="App-logo">iStocks</div>
            </Link>
            <Link to="/stocks">
                <div className="nav-item">Stocks</div>
            </Link>
            <Link to="/about">
                <div className="nav-item">About</div>
            </Link>
        </div>
    )
}