import { call, put, takeEvery } from 'redux-saga/effects';

const apiKey = '61ee5a32dffc2fb5d85c532657e8e09c';

function* getData(action) {
   try {
        let cityName = action.payload.city;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        const response = yield call(fetch, url);
        const data = yield call([response, response.json]);
        const temp = data.main.temp;
        const tempFL = data.main.feels_like;
        const coord = {lon:data.coord.lon, lat:data.coord.lat};
        const weather = data.weather[0].description;
        const wind = data.wind;
        //console.log(cityName, temp);
        yield put({type: "FETCH_SUCCEEDED", payload: {cityName, temp, tempFL, coord, weather, wind}});
   } catch (e) {
        yield put({type: "FETCH_FAILED", payload: e.message});
   }
}

function* mySaga() {
  yield takeEvery("GET_DATA", getData);
}

export default mySaga;