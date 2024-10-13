import React from "react";


export default class Affichagebooks extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div className="containeronebook">
                <img src={this.props.image} alt={this.props.name}/>
                <h2>{this.props.name}</h2>
                <p>{this.props.price}dh</p>
                <input type="checkbox" />
            </div>
        );
    }
}