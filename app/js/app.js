var apiKey = '',
    apiSecret = '',
    opentok = require('opentok')(apiKey, apiSecret),
    sessionId = '',
    token = opentok.generateToken(sessionId);

var session = OT.initSession(sessionId);

session.on({
  'sessionConnected': function(e) {
    session.publish('publisher');
  },
  'streamCreated': function(e) {
    session.subscribe(e.stream, 'subscribers', { insertMode: 'append' });
  }
});

session.connect(apiKey, token);
