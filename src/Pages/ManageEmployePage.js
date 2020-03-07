import React, { Component } from "react";
import Usercard from '../Components/Usercard';
import Header from '../Components/Header';
import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    FormInput,
    InputGroup
} from "shards-react";
import { Link } from "react-router-dom";

class Punch extends Component {
    state = {
        employelist: []
    };

    componentDidMount() {

        fetch('', {
            method: 'GET'
        })
            .then()
            .catch(err => {
                console.log(err);
            })

        this.setState({
            employelist: [
                {
                    userImage: 'https://media.istockphoto.com/photos/beautiful-profile-picture-id182773387?k=6&m=182773387&s=612x612&w=0&h=kXCC5JaOAdOUE5iyd9F2YocAk2O3OEmj6scZs2-QtEk=',
                    username: 'name1',
                    email: 'info1',
                    status: 'ACTIVE'

                },
                {
                    userImage: 'https://www.morpht.com/sites/morpht/files/styles/landscape/public/dalibor-matura_1.jpg?itok=gxCAhwAV',
                    username: 'name2',
                    email: 'info2',
                    status: 'DEACTIVE'
                },
                {
                    username: 'name3',
                    email: 'info3',
                    status: 'ACTIVE'
                }]
        });
    }



    render() {

        const employes = this.state.employelist.map(employe => {
            console.log(employe);
            return <Usercard
                userImage={employe.userImage || 'https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg'}
                userName={employe.username || 'Elon Musk'}
                userInfo={employe.email || 'ex@ex.com'}
                status={employe.status}
            />
        });

        return (
            <div>
                <Header />
                <ButtonToolbar>
                    <ButtonGroup size="sm">
                        <Link style={{ marginLeft: '30px' }} to='/AddEmploye' > <Button style={{ marginLeft: '30px' }}>ADD</Button> </Link>
                    </ButtonGroup>

                    <InputGroup style={{ marginRight: '30px', marginBottom: '10px' }} size="sm" className="ml-auto">
                        <FormInput placeholder="Search..." />
                    </InputGroup>
                </ButtonToolbar>

                <div class="container h-100">
                    <div class="row h-100 ">
                        <div className="col col-md-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            {employes}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Punch;