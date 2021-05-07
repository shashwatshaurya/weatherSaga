const initialState = {
    city: 'Dhanbad',
    temp: '299',
    error: false,
    emsg: '',
    feelsLike: '301',
    coord: {lon: 86.45, lat: 23.8},
    weather: 'cloudy',
    wind: {speed:2.4, deg:179, gust:3.4}
};

let reduceFunc = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_DATA':
            {
                const st = state;
                return st;
            }
        case 'FETCH_SUCCEEDED':
            {
                let st = state;
                st.city= action.payload.cityName;
                st.temp= action.payload.temp;
                st.error= false;
                st.feelsLike= action.payload.tempFL;
                st.weather= action.payload.weather;
                st.coord = action.payload.coord;
                st.wind= action.payload.wind;
                return st;
            }
        case 'FETCH_FAILED':
            {
                let st = state;
                st.error = true;
                st.emsg= action.payload;
                return st;
            }     
        default:
            return state;    
    }
};

export default reduceFunc;