const express = require('express');
const axios = require('axios');

const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

const info = require('./controlador/info');
// const ubicacion = require('./controlador/ubicacion');
//  ubicacion.getCiudadLatLon(argv.nombre)
//      .then(console.log);
// clima.getClima(-0.19,-78.5)
//     .then(console.log);
app.get('/', async function(req, res) {
    let uio = await info.getInfo("Quito");
    let gua = await info.getInfo("Guayaquil");
        res.render('home', {
            ciu1: "Quito",
            ciu2: "Guayaquil",
            cli1: JSON.stringify(uio['cli']),
            cli2: JSON.stringify(gua['cli'])
        });
});

app.get('/about',async (req, res) => {
    //res.send('Esta es mi primera web app');
    let mad = await info.getInfo("Madrid");
    let par = await info.getInfo("Paris");
    res.render('about',{
        ciu1: "Madrid",
        ciu2: "Paris",
        cli1: JSON.stringify(mad['cli']),
        cli2: JSON.stringify(par['cli'])
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});