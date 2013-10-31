
var connectFunction = function() {
  var u = $('#moo-username').val();
  var p = $('#moo-password').val();
  var cmd = "";
  if ( u && p ) {
    // both username and password
    cmd = "connect " + u + " " + p;
  } else if ( u ) {
    // just username
    cmd = "connect " + u;
  }
  if ( cmd ) {
    store.addUser({'username' : u, 'password' : p });
    //store.put('dc-username', u);
    //store.put('dc-password', p);
    store.put("dc-user-login", cmd);
  }
  window.location = "/player-client/?game=sd&" + clientOptions.buildQueryString();
};

store.getUsernames = function() {
  var users = this.get('stored-users');
  if (!users) {
    users = [];
  }
  return users;
};

store.getUser = function(username) {
  username = username.toLowerCase();
  if (pwd = this.get('user-' + username + '-passwd')) {
    return ({ 'username' : username, 'password' : pwd });
  }
};

store.addUser = function(user) {
  username = user.username.toLowerCase();
  password = user.password;
  
  users = this.getUsernames();
  if (!_.contains(users, username)) {
    users.push(username);
  }
  this.put('user-' + username + '-passwd', password);
  this.put('stored-users', users);
};

store.purge = function() {
  var usernames = this.getUsernames();
  for (var i = 0; i < usernames.length; i++) {
    this.remove('user-' + usernames[i] + '-passwd');
  }
  this.remove('stored-users');
}

$(document).ready(function(){
  
  // old school check
  var storedUsername = store.get('dc-username'); // old username format
  var storedPassword = store.get('dc-password'); // old password format
  if (storedUsername && storedPassword ) {
    // convert old values
    store.addUser({'username' : storedUsername, 'password' : storedPassword });
  }
  // purge unmatched old pairs
  store.remove('dc-username');
  store.remove('dc-password');
  
  var usernames = store.getUsernames();
  
  var usernamePicker = $('#user-picker');
  var usernameField = $('#moo-username');
  var passwordField = $('#moo-password');
  var secureToggle = $('#secure-toggle');
  
  if (usernames.length > 0) {
    // drop-down picker
    usernameField.hide();
    
    var divider = $('.divider', usernamePicker);
    for (var i = 0; i < usernames.length; i++) {
      var uname = usernames[i];
      divider.before('<li class="username" data-username="' + uname + '">' + uname + '</li>');
    }
    
    var userOptions = $('UL.dropdown-menu', usernamePicker);
    if (userOptions) {
      userOptions.on('click', function(e) {
        var clicked = $(e.target);
        if (clicked.hasClass('username')) {
          // clicked username
          var usernameClicked = clicked.data('username');
          var user = store.getUser(usernameClicked);
          usernameField.val(user.username);
          passwordField.val(user.password);
          usernamePicker.children().first().text(user.username);
        } else if (clicked.hasClass('command')) {
          var command = clicked.data('command');
          console.log('command was : ' + command);
          if (command == "purgeAll") {
            if (window.confirm("You really want to delete all local user profiles?")) {
              store.purge();
              window.location.reload();
            }
          } else if (command == "newChar") {
            var newName = window.prompt('What is your character name?');
            usernameField.val(newName);
            passwordField.val('');
            
          }
        }
      });
    }
    
    usernamePicker.removeClass('hide');
  } else {
    // input field
  }
  
  secureToggle.removeClass();
  if ('https:' == document.location.protocol) {
    secureToggle.addClass("glyph-locked");
    secureToggle.attr("title", "You're about to connect in secure, encrypted mode. Click the lock icon to disable.");
    secureToggle.on("click", function() {
      if (window.confirm("Disable Encrypted Mode?")) {
        window.location = "http://" + document.location.hostname + document.location.pathname;
      }
    });
  } else {
    secureToggle.addClass("glyph-unlocked");
    secureToggle.attr("title", "You're about to connect in unencrypted mode. Click the open lock icon to switch to secure, encrypted mode.");
    secureToggle.on("click", function() {
      window.location = "https://" + document.location.hostname + document.location.pathname;
    });
  }    
  
  var guest = $('#connect_guest');
  if ( guest && guest.length ) {
    guest.on('click', function() {
      store.put("dc-initial-command", "connect guest");
      window.location = "/player-client/";
    });
  }
  
  // connect as [someone] using [password]
  var connect = $('#connect_as');
  if ( connect && connect.length ) {
    var storedUsername = store.get('dc-username');
    if (storedUsername) {
      usernameField.val(storedUsername);
    }
    var storedPassword = store.get('dc-password');
    if (storedPassword) {
      passwordField.val(storedPassword);
    }
    connect.on('click', connectFunction);
  }
  
  $(document).on( 'keypress' , function( event ) {
    if ( event.which == 13 && !event.shiftKey ) {
      if (usernameField.val() && passwordField.val()) {
        // enter key
        connectFunction();
      }
    }
  });
});