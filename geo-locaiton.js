var unirest = require("unirest");

var req = unirest("GET", "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php");

req.query({
    "location": "New York"
});

req.headers({
    "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
    "x-rapidapi-key": "8b0da7ba80msh8645bb3183490d6p12a4bbjsnd08ffc4bbefc",
    "useQueryString": true
});


req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});