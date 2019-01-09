const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=542f2fb31c21d040d948aa7548c2dcfb`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}