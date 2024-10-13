import React from "react";
import { ListeBooks } from "./ListeBooks";
import Affichagebooks from "./AffichageBooks";
import '../style/style.css'


export default class App extends React.Component{
    render(){
        return(
            <div className="container">
                    {ListeBooks.map((book)=>
                    <Affichagebooks key={book.name} name={book.name} image={book.image} price={book.price}></Affichagebooks>)}
            </div>
        );
    }
}