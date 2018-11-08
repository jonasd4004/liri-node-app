# liri-node-app

# Requirements

Make a Node.js app that depends on user input from the command line
Integrate Bands In Town, Spotify, and OMDb APIs via the appropriate NPM modules
Use API calls and parse through returned JSON objects, outputting them in a specified format
Read commands and queries from file

# Databases Acquired

Node.js
JavaScript
Bands In Town API (via omdbi.com page and request npm module)
Spotify API (via spotify npm module)
OMDb API (via request npm module)

# App Function Details

Authentication keys for Spotify, OMDBI, and Bands In Town are stored in "keys.js", and we are exporting its contents to the main "liri.js" file
What our app does depends on what the user types, and there are 4 main functions: (1) search musician concert info, (2) Spotify lookup for a song, (3) OMDb lookup for a movie, and (4) read command and query from another file
The program makes a request to the Bands In Town API that returns a JSON object which includes all the information you need about the artist's upcoming tour information such as: (name of venue, venue location, and date of the event).
The program also makes a request to the Spotify API, and we get back a JSON object that includes everything we need (artist(s), song, preview link, and album)
The program also makes a HTTP request to the OMDb API using the request NPM module, and we get back a JSON object that includes everything we need (title, year, IMDb rating, language, etc.)
The program also reads from a file called "random.text" and executes the command and query found there using string and array methods


# Screenshots

