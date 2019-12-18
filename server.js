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
        res.render('home', {
            ciu1: "Quito",
            ciu2: "Guayaquil",
            cli1: await info.getInfo("Quito")['cli'],
            cli2: await info.getInfo("Guayaquil")
        });
});

app.get('/about',async (req, res) => {
    //res.send('Esta es mi primera web app');
    res.render('about',{
        ciu1: "Madrid",
        ciu2: "Paris",
        cli1: await info.getInfo("Madrid")['cli'],
        cli2: await info.getInfo("Paris")
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});