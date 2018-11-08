require("dotenv").config();

var fs = require("fs");
let moment = require("moment");
let request = require("request");
let keys = require("./keys.js");
var Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// get the user input
const input = process.argv[2];
const query = process.argv.slice(3).join(" ");

// make a decision based on the command
switch (input) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThisSong(query);
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
    default:
        console.log("I don't know. Ask Google-Bot.");
        break;
}

function concertThis() {
    let queryURL = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=70472da13b62029c60f902691c864e84";
    request(queryURL, function (err, response, body) {
        // console.log(JSON.parse(body));
        let concertInfo = JSON.parse(body);
        for (var i = 0; i < 3; i++){
            var show = concertInfo[i];
            console.log("Venue: " + show.venue.name);
            console.log("Location: " + show.venue.city + ", " + show.venue.country);
            console.log(moment(show.datetime).format("DD/MM/YY"));
        }
    })
    console.log("CONCERT THIS: ");
}

function spotifyThisSong(song) {
	console.log(song);

	if(song === undefined) {
		song = "the sign ace of base";
	}
spotify.search({ type: 'track', query: song }, function(error, data) {
	    if(error) { // if error
	        console.log('Error occurred: ' + error);
	    } else { // if no error
	    	// For loop is for when a track has multiple artists
				for(var i = 0; i < data.tracks.items[0].artists.length; i++) {
					if(i === 0) {
						console.log("Artist(s):    " + data.tracks.items[0].artists[i].name);
					} else {
						console.log("              " + data.tracks.items[0].artists[i].name);
					}
				}
				console.log("Song:         " + data.tracks.items[0].name);
				console.log("Preview Link: " + data.tracks.items[0].preview_url);
				console.log("Album:        " + data.tracks.items[0].album.name);
	    }
	 
	 		
	});
}


function movieThis() {
    let queryURL = " https://www.omdbapi.com/?i=tt3896198&apikey=30a73789&t=" + query;
    request(queryURL, function (err, response, body){
        var movieInfo = JSON.parse(body);
        // console.log(body);
        console.log(movieInfo.Title);
        console.log(movieInfo.Year);
        console.log(movieInfo.imdbRating);
        console.log(movieInfo.Country);
        console.log(movieInfo.Language);
        console.log(movieInfo.Plot);
        console.log(movieInfo.Actors);
    })
    console.log("MOVIE THIS: ");
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});
    console.log("DO WHAT IT SAYS: ");
}