import React, {Component} from 'react';
import store from '../redux/store';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityName: ''
        }

        this.onButtonClick = this.onButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onButtonClick(e){
        e.preventDefault();
        store.dispatch({type: 'GET_DATA', payload: {city: this.state.cityName}});
    }

    handleChange(e){
        this.setState((state, props)=>{
            return {cityName: e.target.value}
        });
    }

    render(){
        return(
        <div>
            <form>
                <input id='city' type="text" value={this.state.cityName} onChange={this.handleChange} placeholder='City Name...' />
                <button type="submit" onClick={this.onButtonClick}>Search</button>
            </form>
        </div>
        );
    }
}

export default Form;