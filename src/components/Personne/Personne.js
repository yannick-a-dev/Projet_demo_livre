import React, {Component} from "react";
import classes from "./Personne.module.css";

class Personne extends Component {
    render() {
        const monStyle = {
           
            color:"white"
        }
        monStyle.fontSize = "12px";
        //test

        if(this.props.sexe) {
            monStyle.backgroundColor="green"; 
        }else {
            monStyle.backgroundColor="red"; 
        }
        
        //test
        //let affichageSexe = "homme";
        //if(!this.props.sexe) affichageSexe = "Femme";

        return (
            <>
                <h1 className={classes.monTitre}>{this.props.nom}</h1>
                {this.props.children}
                <div style={monStyle}>Sexe : {this.props.sexe ? "Homme" : "Femme"}</div>
                <button onClick={this.props.clic}>Anniversaire</button>
            </>
        );
    }
}


export default Personne;