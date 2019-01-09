const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let encodedUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    .then(resp => {
        let location = resp.data.results[0];
        let coors = location.geometry.location;
        console.log('Direccion:', location.formatted_address);
        console.log('Lat:', coors.lat);
        console.log('Lng', coors.lng);
        // console.log(JSON.stringify(resp.data, undefined, 2));
    })
    .catch(e => console.log('ERROR!!!!', e));