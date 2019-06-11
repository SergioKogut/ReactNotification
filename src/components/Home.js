import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementValue, decrementValue } from '../reducers/counter';
import Notifications, {notify} from '../components/Notifications'

const ButtonStyle = {
    margin: "0px 10px"
}

const InputStyle = {
    
}

class Home extends Component {


    state = {
        valueAdd: 10,
        textMessage:'Hello anonim!',
        colorId:'#444'
    }

    handleChange = (e) => {
        this.setState({ valueAdd: Number(e.target.value) });
    }
    handleChangeText = (e) => {
        this.setState({ textMessage: e.target.value });
    }
    handleChangeColor = (e) => {
        this.setState({ colorId: e.target.value });
    }

    render() {
        console.log('------- Home props------', this.props);
        const { count } = this.props;
        const { valueAdd,textMessage,colorId } = this.state;
        return (
            <div>
                <Notifications color={colorId} />
                <h1>Home page</h1>
                <button className="btn btn-success" onClick={()=>notify(textMessage)}> Click me</button>
                <div className="input-group mb-2 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Text message: </span>
                    </div>
                    <input type="text"
                        style={InputStyle}
                        id="message"
                        name="message"
                        value={this.state.textMessage}
                        onChange={this.handleChangeText}
                    />
                </div>
                <div className="input-group mb-2 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Color Id: </span>
                    </div>
                    <input type="text"
                        style={InputStyle}
                        id="colorid"
                        name="Colorid"
                        value={this.state.colorId}
                        onChange={this.handleChangeColor}
                    />
                </div>


                <h1>Count: {count}</h1>
            
                <div className="input-group mb-2 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Value: </span>
                    </div>
                    <input type="text"
                        style={InputStyle}
                        id="values"
                        name="values"
                        value={this.state.valueAdd}
                        onChange={this.handleChange}
                    />
                </div>
            
            

                <button
                    className="btn btn-success"
                    style={ButtonStyle}
                    onClick={() => this.props.increment()}>
                    <i className="fa fa-plus-circle" /> Add
                    </button>
                <button
                    className="btn btn-info"
                    onClick={() => this.props.decrement()}>
                    <i className="fa fa-minus-circle" /> Sub
                    </button>
                <button
                    className="btn btn-success"
                    style={ButtonStyle}
                    onClick={() => this.props.incrementValue(valueAdd)}>
                    <i className="fa fa-plus-circle" /> Add value
                    </button>
                <button
                    className="btn btn-info"
                    onClick={() => this.props.decrementValue(valueAdd)}>
                    <i className="fa fa-minus-circle" /> Sub value
                    </button>
            </div>
            
        );
    }
}


const mapStateProps = (state) => {
    console.log('----redux store connect----', state);
    return {
        count: state.counter.counterStore
    };
}


export default connect(mapStateProps, { increment, decrement, incrementValue, decrementValue })(Home);