import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h3>Wallet balance: {this.props.balance}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        balance: state
    }
};


export default connect(mapStateToProps, null)(Wallet);