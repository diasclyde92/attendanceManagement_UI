import React, { Component } from "react";
import { FormInput } from "shards-react";
import { FormSelect } from "shards-react";
import { Button } from "shards-react";


class Punch extends Component {
    state = {
        firstName: undefined,
        lastName: undefined,
        username: undefined,
        email: undefined,
        userType: undefined
    };

    componentDidMount() {

    }

    handelchange = (event) => {
        this.setState({ value: event.target.value });
    }

    submit = () => {
        console.log(this.state.value);
        fetch('', {
            method: 'POST',
            body: JSON.stringify({ userId: this.state.value })
        })
            .then()
            .catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
            <div class="container h-100">
                <div class="row h-100 justify-content-center align-items-center">
                    <div className="col col-md-6">
                        <form action='' method='POST'>
                            <FormInput placeholder="Enter employes first name" name='firstName' />
                            <FormInput style={{ marginTop: '10px' }} placeholder="Enter employes last name" name='lastName' />
                            <FormInput style={{ marginTop: '10px' }} placeholder="Enter employes user name" name='username' />
                            <FormInput style={{ marginTop: '10px' }} placeholder="Enter employes email name" name='email' />


                            <FormSelect style={{ marginTop: '10px' }} name='userType'>
                                <option value="Employe">Employe</option>
                                <option value="Admin">Admin</option>
                            </FormSelect>

                            <Button style={{ marginTop: '10px' }} active theme="success" type='submit'>
                                Create user
                        </Button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}


export default Punch;