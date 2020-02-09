import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import Gift from './Gift';


class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            gifts: []
        }
    }

    addGift = () => {
        const { gifts } = this.state;

        const maxId = gifts.length > 0 ? Math.max(...gifts.map(x => x.id)) : 0;

        gifts.push({
            id: maxId + 1
        });

        this.setState({
            gifts
        });
    }

    handleRemoveGift = id => {
        const  gifts  =  this.state.gifts.filter(gift => gift.id !== id);

        this.setState({
            gifts
        });
    }

    render() {
        return (
            <Container>
                <h1>Gift Giver</h1>
                    <Button className="btn-add" onClick={this.addGift}>
                        Add Gift
                    </Button>

                <div className="gift-list">
                    {this.state.gifts.map(gift => 
                        <Gift 
                        key={gift.id}
                        gift={gift}
                        handleRemove={this.handleRemoveGift}
                        >{gift.id}</Gift>
                    )}
                </div>
            </Container>
        )
    }
}

export default App;