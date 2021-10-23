import React, { Component } from "react";
import Personne from "./components/Personne/Personne";
import Horloge from "./containers/Horloge/Horloge";
import AgePersonne from "./components/Personne/AgePersonne/AgePersonne";
import "./App.css";


class App extends Component {
    state = {
        personnes: [
            { id:1, nom: "Matthieu", age: 31, sexe: true },
            { id:2, nom: "Tya", age: 25, sexe: false },
            { id:5, nom: "Milo", age: 31, sexe: true },
            { id:7, nom: "Toto", age: 28, sexe: true },
        ]
    }

    anniversaireHandler = (id) => {
        const numCaseTabPersonne = this.state.personnes.findIndex(element => {
            return element.id === id; 
        }) 

        const newPersonne = {...this.state.personnes[numCaseTabPersonne]};
        newPersonne.age++;
        
        const newTab = [...this.state.personnes];
        newTab[numCaseTabPersonne] = newPersonne; 
        this.setState({ personnes: newTab }); 
    }

    render() {
        return (
            <>
                <button onClick={this.anniversaireHandler}>Anniversaire</button>
                <Horloge />

                {this.state.personnes.map(personne => {
                    return (
                        <Personne key={personne.id} {...personne} clic={() => this.anniversaireHandler(personne.id)}>
                            <AgePersonne age={personne.age} />
                        </Personne>
                    );
                })}
            </>
        );
    }
}


export default App;