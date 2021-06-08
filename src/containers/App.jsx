import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Form from '../compoents/Form';
import Card from '../compoents/Card';

class App extends Component{
    // constructor(props){
    //     super(props);
    // };
    render(){
        return (
            <Provider store={store}>
                <div>
                    <h1>Weather Saga</h1>
                    <Form />
                    <Card />
                </div>
            </Provider>
        );
    }
}

export default App;