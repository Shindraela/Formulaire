import React, { Component } from "react";

// const BonjourConnu = props => {
//     return <p>Bonjour {props.nom}</p>;
// };

// const BonjourInconnu = props => {
//     return <p>Bonjour étranger</p>;
// };

// const nombres = [1, 2, 3, 4];
// const liste = nombres.map(n => <li>{n}</li>);
// const liste = nombres.map((n, i) => <li key={i.toString()}>{n}</li>);

const Item = props => {
    return <li>{props.value}</li>;
};

const Liste = props => {
    const nombres = props.nombres;
    const liste = nombres.map((n, i) => <Item key={i.toString()} value={n} />);
    return liste;
};

class App extends Component {
    // state = {
    //     estAuthentifie: false
    // };

    render() {
        // return <ul>{liste}</ul>;

        return (
            <ul>
                <Liste nombres={[1, 2, 3, 4]} />
            </ul>
        );
    }

    // render() {
    // 	// 1ere alternative
    //     // if (this.state.estAuthentifie) {
    //     //     return <BonjourConnu nom="Laurent" />;
    //     // } else {
    //     //     return <BonjourInconnu />;
    // 	// }

    // 	// 2e alternative
    // 	// return (this.state.estAuthentifie) ? <BonjourConnu nom="Toto" /> : <BonjourInconnu />

    // 	// 3e alternative
    // 	return this.state.estAuthentifie && <BonjourConnu nom="Titi" />
    // }
}

export default App;
