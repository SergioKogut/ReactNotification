import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementValue, decrementValue } from '../reducers/counter';
import Notifications, {notify} from '../components/Notifications'

const ButtonStyle = {
    margin: "0px 10px"
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
                <Notifications />
                <h1>Home page Count: {count}</h1>
                 
                <button className="btn btn-success" 
                   onClick={()=>notify(textMessage,colorId)} 
                   style={{'margin-bottom':'10px','border-radius': '25px'}}>
                        Click me
                </button>
               
               
                <div className="input-group mb-2 input-group-lg">
                    <div className="input-group-prepend" >
                        <span className="input-group-text" >Message:</span>
                    </div>
                    <input type="text"
                        id="message"
                        name="message"
                        value={textMessage}
                        onChange={this.handleChangeText}
                    />
                </div>

                <div className="input-group mb-2 input-group-lg">
                    <div className="input-group-prepend" >
                        <span className="input-group-text" s>Color Id:</span>
                    </div>
                    <input type="text"
                        id="colorid"
                        name="colorid"
                        value={this.state.colorId}
                        onChange={this.handleChangeColor}
                    />
                </div>


                
            
                <div className="input-group mb-2 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Value: </span>
                    </div>
                    <input type="text"
                        
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