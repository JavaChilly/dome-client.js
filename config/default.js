module.exports = {
  'node' : {
    'mode'         : 'production',

// if you set this to port 80, you must run the server as root
    'port'         : 5555,

// specific ip is optional (if your server has more than one)
//    'ip'           : '208.52.189.89',

    'socketUrl'    : 'http://localhost:5555',
    'socketUrlSSL' : '',
    'poweredBy'    : 'dome-client.js',
    'session'      : {
        'secret' : 'secret',
        'key'    : 'express.sid'
    }
  },
  
// ssl is optional
//  'ssl' : {
//    'port' : 443,
//    'key'  : 'config/ssl/BlahBlah.key',
//    'cert' : 'config/ssl/BlahBlah.crt',
//    'ca'   : 'config/ssl/intermediate.crt'
//  },

  // where it connects to
  'moo' : {
    'name' : 'Sindome',
    'host' : 'moo.sindome.org',
    'port' : 5555
  },

  // specialized autocomplete for each player class
  'autocomplete' : {
    'p' : 'config/ac/player.txt'
  },
  'version' : {
    'major' : '1',
    'minor' : '2'
    // build is pulled from git hash
  }
};
