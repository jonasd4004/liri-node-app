# liri-node-app

# Requirements

1. Make a Node.js app that depends on user input from the command line.

2. Integrate Bands In Town, Spotify, and OMDb APIs via the appropriate NPM modules.

3. Use API calls and parse through returned JSON objects, outputting them in a specified format.

4. Read commands and queries from file

# Databases Acquired

1. Node.js
2. JavaScript
3. Bands In Town API (via omdbi.com page and request npm module)
4. Spotify API (via spotify npm module)
5. OMDb API (via request npm module)

# App Function Details

1. Authentication keys for Spotify, OMDBI, and Bands In Town are stored in "keys.js", and we are exporting its contents to the main "liri.js" file.

2. What our app does depends on what the user types, and there are 4 main functions: (1) search musician concert info, (2) Spotify lookup for a song, (3) OMDb lookup for a movie, and (4) read command and query from another file.

3. The application makes a request to the Bands In Town API that returns a JSON object which includes all the information you need about the artist's upcoming tour information such as: (name of venue, venue location, and date of the event).

4. The application makes a request to the Spotify API, and we get back a JSON object that includes everything we need (artist(s), song, preview link, and album).

5. The application makes a HTTP request to the OMDb API using the request NPM module, and we get back a JSON object that includes everything we need (title, year, IMDb rating, language, etc.).

6. The application also reads from a file called "random.text" and executes the command and query found there using string and array methods.


# Screenshots

Concert This:
<img width="1103" alt="screen shot 2018-11-08 at 1 55 22 pm" src="https://user-images.githubusercontent.com/40375692/48224241-c8cb5580-e35e-11e8-8905-724d71b7f35b.png">

Spotify This Song:
<img width="1090" alt="screen shot 2018-11-08 at 2 10 08 pm" src="https://user-images.githubusercontent.com/40375692/48224650-13999d00-e360-11e8-980e-53c5ab71e70a.png">

Movie This:
<img width="1086" alt="screen shot 2018-11-08 at 2 21 54 pm" src="https://user-images.githubusercontent.com/40375692/48225185-b7377d00-e361-11e8-80e3-20eeea7593fb.png">

Do What It Says:
(spotify)
<img width="1089" alt="screen shot 2018-11-08 at 2 24 53 pm" src="https://user-images.githubusercontent.com/40375692/48225357-28773000-e362-11e8-8e2f-6644238ac9f3.png">

(movie-this)
<img width="1088" alt="screen shot 2018-11-08 at 2 28 55 pm" src="https://user-images.githubusercontent.com/40375692/48225522-a89d9580-e362-11e8-90a7-508aeb01fcba.png">

(concert-this)
<img width="1096" alt="screen shot 2018-11-08 at 2 32 11 pm" src="https://user-images.githubusercontent.com/40375692/48225689-1f3a9300-e363-11e8-85f6-76ab0dbbc9b0.png">