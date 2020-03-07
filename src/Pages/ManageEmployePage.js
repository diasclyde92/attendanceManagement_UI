import React, { Component } from "react";
import Usercard from '../Components/Usercard';

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
                    userName: 'name1',
                    userInfo: 'info1'
                },
                {
                    userImage: 'https://www.morpht.com/sites/morpht/files/styles/landscape/public/dalibor-matura_1.jpg?itok=gxCAhwAV',
                    userName: 'name2',
                    userInfo: 'info2'

                },
                {
                    userName: 'name3',
                    userInfo: 'info3'
                }]
        });
    }

    render() {

        const employes = this.state.employelist.map(employe => {
            console.log(employe);
            return <Usercard
                userImage={employe.userImage || 'https://ichef.bbci.co.uk/images/ic/640x360/p03c84wz.jpg'}
                userName={employe.userName || 'Elon Musk'}
                userInfo={employe.userInfo || 'jr. developer'}
            />
        });

        return (
            <div class="container h-100">
                <div class="row h-100 ">
                    <div className="col col-md-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        {employes}
                    </div>
                </div>
            </div>

        );
    }
}


export default Punch;