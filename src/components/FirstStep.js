import React, { Component } from "react";

class FirstStep extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    state = {
        isRequired: false
    }

    render() {
        const { values } = this.props;

        return (
            <form >
                <h1>Informations</h1>
                <label>Civilite</label>
                <select
                    name="civilite"
                    onChange={this.props.handleChange("civilite")}
                    defaultValue={values.civilite}
                >
                    <option value="">Choisissez une option</option>
                    <option defaultValue={values.civilite}>M</option>
                    <option defaultValue={values.civilite}>Mme</option>
                </select>
                <label>Nom</label>
                <input
                    onChange={this.props.handleChange("nom")}
                    defaultValue={values.nom}
                    required={this.state.isRequired}
                />
                <label>Prenom</label>
                <input
                    onChange={this.props.handleChange("prenom")}
                    defaultValue={values.prenom}
                    required={this.state.isRequired}
                />
                <label>Email</label>
                <input
                    type="email"
                    onChange={this.props.handleChange("email")}
                    defaultValue={values.email}
                    required={this.state.isRequired}
                />
                <label>Telephone</label>
                <input
                    onChange={this.props.handleChange("tel")}
                    defaultValue={values.tel}
                    required={this.state.isRequired}
                />

                <div className="buttons-container">
                    <button onClick={this.continue}>
                        Suivant
                    </button>
                </div>
            </form>
        );
    }
}

export default FirstStep;
