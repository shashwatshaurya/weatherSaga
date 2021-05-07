import React from 'react';
//import { connect } from 'react-redux';
//import store from '../redux/store';
import { useSelector } from 'react-redux';

// class Card extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         let city; let temp; let error;
//         store.subscribe(()=>{
//             const storeNow = store.getState();
//             city = storeNow.city;
//             temp = storeNow.temp;
//         });
//         return (
//             <p>{city} {temp} </p>
//         );
//     }
// }

// const card = (props) => {
//     console.log(props.state);
//     const {city, temp, error} = stateData;
//     return(
//         <p>{city} {temp} {error}</p>
//     );
// }

// const mapStateToProps = state => {
//     return state;
// }

// const mapDispatchToProps = dispatch => {
//     return{
//         getData : dispatch({type:'GET_DATA'})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(card);

const Card = ()=>{
    
    let temp = useSelector(state=>state.temp)-273;
    const city = useSelector(state=>state.city);
    const error = useSelector(state=>state.error);
    let feelsLike = useSelector(state=>state.feelsLike)-273;
    const coord= useSelector(state=>state.coord);
    const weather= useSelector(state=>state.weather);
    const wind= useSelector(state=>state.wind);
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCQY39vF9G59zpzYOJygrvsj_AfG472eYI
    &q=${coord.lat},${coord.lon}`;

    temp = parseFloat(temp).toFixed(1);
    feelsLike = parseFloat(feelsLike).toFixed(1);
    if(error)
        return (<p>Oops!!! We encountered an error</p>);
    else
        return(
            <div id='card'>
                <h3>{city}</h3>
                <p>Temperature- {temp}&deg;C</p>
                <p>Feels Like-  {feelsLike}&#176;C</p>
                <p>Weather-     {weather}</p>
                <p>Wind Speed-  {wind.speed}km/h</p>
                <p>Wind Dir-    {wind.deg}&#176;</p>
                <iframe
                    width="600"
                    height="450"
                    loading="lazy"
                    src={url}>
                </iframe>
            </div>
        );
}

export default Card;