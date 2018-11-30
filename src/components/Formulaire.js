import React, { Component } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Confirmation from "./Confirmation";
import Success from "./Success";

class Formulaire extends Component {
    state = {
        step: 1,
        civilite: "",
        nom: "",
        prenom: "",
        email: "",
        tel: "",
        framework: "",
        autre: ""
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    };

    render() {
        const { step } = this.state;
        const { civilite, nom, prenom, email, tel, framework, autre } = this.state;
        const values = {
            civilite,
            nom,
            prenom,
            email,
            tel,
            framework,
            autre
        };

        switch (step) {
            case 1:
                return (
                    <FirstStep
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <SecondStep
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirmation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return <Success />;
            default:
                return false;
        }
    }
}

export default Formulaire;
