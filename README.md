dome-client.js
==============

A socket.io / websocket based MOO & MUD client written in node.

## About

This is designed for games to provide to their players. Requires no flash. Requires no java plugin. Connections from end user's browser to the server occur via web socket to the node web application, which manages socket connections to the moo itself.

## Check it out online
You can see a version of this running that will connect to whatever game you want here: https://pubclient.sindome.org/

You are free to use that public client as much as you want! In fact, it's the default client for connecting to games on http://www.mudverse.com/

## Installation

1. Clone the repo & run `npm install` to fetch the required node modules.
2. Run `sudo npm install -g forever` to install the server nanny, which should restart the client if it dies.
3. Edit `config/default.js` to include your game's information
  * **mode** [ *production* / *debug* ] - this mostly determines the amount of debug you will see
  * **port** - where this node app will run  
    	If you want to use a standard port like 80 or 443, you must run our `./run.sh` and `./debug.sh` scripts as root. Instead, you can run on a higher port and proxy through a web server like NGINX or Apache.
  * **socketUrl** - where your browser will look for the fancy websocket that node will serve. If you're running this on your own computer, set socketUrl to `'http://localhost:5555'`. This is the url of your dome-client.js server. 
    * **ip** - optional support if you have more than one ip
  * The MOO section controls where the client will connect. (this isn't designed to connect to a bunch of different games yet)
4. Start the server in debug mode: `./debug.sh` 

## SSL
SSL is supported, uncomment the config section, change the key,cert,ca according to your ssl key files.

## Additional Configuration
If you want to have multiple configuration files, you can do this by renaming default.js to UNIQUE_NAME.js else and then doing the following:
```bash
export NODE_ENV=UNIQUE_NAME
```

This will tell the app to use your alternate config file. Note that you should not include the file type in the NODE_ENV. 

## Forever
The instructions tell you to install forever. We actually prefer supervisor, but haven't updated this code to that yet.
