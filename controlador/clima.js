const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f93affd8a787161841c229b7b7e7ae21&units=metric`);
    return resp.data.main.temp;
};
module.exports = {
    getClima
}