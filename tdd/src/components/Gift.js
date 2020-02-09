import React, { Component } from 'react';
import { FormGroup, Form, FormControl, ControlLabel, FormLabel, Button } from 'react-bootstrap';


class Gift extends Component {

    constructor(props) {
        super(props);

        this.state = { person: '', present: ''};
    }

    handlePersonChange = event => {
        const value = event.target.value;

        this.setState({
            person: value
        });
    }

    handlePresentChange = event => {
        const value = event.target.value;

        this.setState({
            present: value
        });
    }

    render() {
        return (
            <>
                <Form>
                        <FormGroup>
                            <FormLabel>Person</FormLabel>
                            <FormControl className="input-person" onChange={this.handlePersonChange}/>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Present</FormLabel>
                            <FormControl className="input-present" onChange={this.handlePresentChange}></FormControl>
                        </FormGroup>
                </Form>
                <Button className="btn-remove" onClick={() => this.props.handleRemove(this.props.gift.id)}>Remove gift</Button>
           </>
        )
    }
}

export default Gift;