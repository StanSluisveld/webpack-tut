var messages = require('./message.js');

var newMessage = () => (`<p>${messages.foo} ${messages.bar}</p>`);

var app = document.getElementById('app');
app.innerHTML  = newMessage();

if(module.hot) {
    module.hot.accept(); 
} 