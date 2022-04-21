import "./List.css"
import { Link } from "react-router-dom"

export default function List(){
    return( 
    <header>
        <Link to="/">Home</Link>
        <Link to="/animes">Animes</Link>
        <Link to="/contact">Contact</Link>
      </header>
    )
}