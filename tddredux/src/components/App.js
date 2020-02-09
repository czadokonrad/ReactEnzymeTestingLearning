import React, { Component } from 'react';
import Wallet from './Wallet';


class App extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h2>Loot Check</h2>
                <Wallet />
            </div>
        )
    }
}


export default App;