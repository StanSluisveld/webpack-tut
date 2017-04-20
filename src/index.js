var messages = require('./message.js');

var app = document.getElementById('app');
app.innerHTML  = '<p>' + messages.hi + messages.event + '</p>';