dome-client.js
==============

socket.io / browser -based moo client web application. (telnet in a browser)

This is designed for games to provide to their players. Requires no flash. Requires no java plugin. Connections from end user's browser to the server occur via web socket to the node web application, which manages socket connections to the moo itself.

1. Run `npm install` to fetch the required node modules.
2. Run `sudo npm install -g forever` to install the server nanny
3. Copy `config/default.js` to `config/<unique name>.js`
4. Edit your `<unique name>` config:
  * **mode** [ *production* / *debug* ] - mostly amount of debug
  * **port** - where this node app will run  
    	If you want to use a standard port like 80 or 443, you must run our `./run.sh` and `./debug.sh` scripts as root. Instead, run on a higher port and proxy through a web server like NGINX or Apache.
  * **ip** - optional support if you have more than one ip
  * **socketUrl** - where your browser will look for the fancy websocket that node will serve. If you're running this on your own computer, set socketUrl to `'http://localhost:5555'`. This is the url of your dome-client.js server. 
  * SSL is supported, uncomment the config section, change the key,cert,ca according to your ssl key files.
  * The MOO section controls where the client will connect. (this isn't designed to connect to a bunch of different games yet)
5. Add your config to your terminal profile (.profile, .bashrc, .bash_profile, etc): `export NODE_ENV=<unique name>` *or just run it on the command line for now*
6. Start the server in debug mode: `./debug.sh` 
