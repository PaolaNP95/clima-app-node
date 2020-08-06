const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'X-RapidAPI-Key': '8b0da7ba80msh8645bb3183490d6p12a4bbjsnd08ffc4bbefc'
        }
    });
    //openweatherMap
    /* instance.get()
        .then(resp => console.log(resp.data))
        .catch(err => console.log('ERROR!!', err)); */

    const resp = await instance.get(); //async

    if (resp.data.Results.length === null) {
        throw new Error(`Np hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }



}

module.exports = {
    getLugarLatLng
}