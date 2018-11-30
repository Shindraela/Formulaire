import React, { Component } from "react";

class SecondStep extends Component {
    saveAndContinue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    state = {
        isRequired: true
    }

    render() {
        const { values } = this.props;

        return (
            <form >
                <h1>Informations</h1>
                <div className="label-container">
                    <label htmlFor="Vue">Vue</label>
                    <input
                        type="radio"
                        name="radioGroup"
                        value="vue"
                        required={this.state.isRequired}
                        onChange={this.props.handleChange("framework")}
                    />
                </div>

                <div className="label-container">
                    <label htmlFor="Angular">Angular</label>
                    <input
                        type="radio"
                        label="Angular"
                        name="radioGroup"
                        value="angular"
                        required={this.state.isRequired}
                        onChange={this.props.handleChange("framework")}
                    />
                </div>

                <div className="label-container">
                    <label htmlFor="Symfony">Symfony</label>
                    <input
                        type="radio"
                        label="Symfony"
                        name="radioGroup"
                        value="symfony"
                        required={this.state.isRequired}
                        onChange={this.props.handleChange("framework")}
                    />
                </div>

                <label>Autre</label>
                <textarea
                    onChange={this.props.handleChange("autre")}
                    defaultValue={values.autre}
                />

                <div className="buttons-container">
                    <button onClick={this.back}>Précédent</button>
                    <button onClick={this.saveAndContinue}>Suivant</button>
                </div>
            </form>
        );
    }
}

export default SecondStep;
