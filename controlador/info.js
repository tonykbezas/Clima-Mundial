const axios = require('axios');
const clima = require('./clima');
const ubicacion = require('./ubicacion');


const getInfo = async(nombre) => {
    const ubi =  await ubicacion.getCiudadLatLon(nombre);
    const cli = await clima.getClima(ubi.lat,ubi.lon);
    return {
        ubi,
        cli
    }
};
module.exports = {
    getInfo
}