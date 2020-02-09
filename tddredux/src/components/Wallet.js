import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            balance: undefined
        }
    }


    handleChange = event => {
        const value = event.target.value;

        this.setState({
            balance: parseInt(value)
        });
    }

    deposit = () => {
        this.props.deposit(this.state.balance);
    }

    withdraw = () => {
        this.props.withdraw(this.state.balance);
    }

    render() {
        return (
            <div>
                <h3 className="balance">Wallet balance: {this.props.balance}</h3>
                <br />
                <input className="input-wallet" onChange={this.handleChange}></input>
                <button type="button" className="btn-deposit" onClick={this.deposit}>Deposit</button>
                <button type="button" className="btn-withdraw" onClick={this.withdraw}>Withdraw</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        balance: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deposit: (balance) => dispatch(deposit(balance)),
        withdraw: (balance) => dispatch(withdraw(balance))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);