import React, { Component } from "react";
import axios from 'axios';

class Confirmation extends Component {
    saveAndContinue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {
            values: { civilite, nom, prenom, email, tel, framework, autre }
        } = this.props;

        axios.post("http://localhost:4000/utilisateurs", { civilite, nom, prenom, email, tel, framework, autre })
            .then(result => {
                this.props.nextStep();
            });
    }

    render() {
        const {
            values: { civilite, nom, prenom, email, tel, framework, autre }
        } = this.props;

        return (
            <div className="confirmation-container">
                <h1>Confirmation</h1>
                <p>Cliquez sur Confirmer si les informations suivantes sont correctes</p>

                <ul>
                    <li>
                        <span>Civilite: {civilite}</span>
                    </li>
                    <li>
                        <span>Nom: {nom}</span>
                    </li>
                    <li>
                        <span>Prenom: {prenom}</span>
                    </li>
                    <li>
                        <span>Email: {email}</span>
                    </li>
                    <li>
                        <span>Tel: {tel}</span>
                    </li>
                    <li>
                        <span>Frameworks : {framework}, {autre}</span>
                    </li>
                </ul>

                <div className="buttons-container">
                    <button onClick={this.back}>Précédent</button>
                    <button onClick={this.onSubmit}>Confirmer</button>
                </div>
            </div>
        );
    }
}

export default Confirmation;
