import React from 'react';
import styled from 'styled-components';
import ee from 'event-emitter';

const Container = styled.div`
background-color: ${props => props.color};
color: white;
padding: 16px;
position: absolute;
top: ${props => props.top}px;
right: 16px;
z-index: 999;
transition: top 0.5s ease;

>i {
margin-left: 8px;
}
`;


const emitter = new ee();

export const notify = (msg) => {
    emitter.emit('notification', msg, true);
}

export default class Notifications extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            top: -100,
            message: '',
            color: '#444'
        }
        emitter.on('notification', (msg) => {
            this.showNotification(msg);
        });

    }
    showNotification = (msg) => {
        this.setState({
            top: 16,
            message: msg,
            color: this.props.color
        }, () => {
            setTimeout(() => {
                this.setState({ top: -100 });

            }, 3000);
        });
    }
    render() {
        console.log('------- Notifications props------', this.props);
        const { top, message, color } = this.state;
        return (
            <React.Fragment>
                {/* <button className="btn btn-info" onClick={this.showNotification}>Click me</button> */}
                <Container top={top} color={color}>{message}<i className="fa fa-bell"></i></Container>
            </React.Fragment>
        );
    }
}
