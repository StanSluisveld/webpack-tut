var messages = require('./message.js');
import {multiply} from './someFunction'

//var newMessage = () => (`<p>${messages.foo} ${messages.bar}</p>`);

const newMessage = () => (multiply(4, 3));



var app = document.getElementById('app');
app.innerHTML  = newMessage();

if(module.hot) {
    module.hot.accept(); 
} 