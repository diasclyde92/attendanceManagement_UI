import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
} from "shards-react";


export default class Usercard extends React.Component {
    render() {
        return (
            <Card style={{ maxWidth: "300px" }}>
                <CardImg style={{ height: '230px' }} src={this.props.userImage} />
                <CardBody>
                    <CardTitle>{this.props.userName}</CardTitle>
                    <p>{this.props.userInfo}</p>
                    <Button style={{ marginRight: '5px' }}>Edit</Button>
                    <Button>Delete</Button>
                    <Button style={{ marginTop: '5px' }}>View Attendance</Button>
                </CardBody>
            </Card>
        );
    }
}
