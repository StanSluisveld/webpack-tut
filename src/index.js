var messages = require('./message.js');
import {multiply} from './someFunction'

//var newMessage = () => (`<p>${messages.foo} ${messages.bar}</p>`);
//const newMessage = () => (multiply(4, 3));


var app = document.getElementById('app');
app.innerHTML  = `
    <div id="menu"> 
        <button id="loadPage1">Load Page 1</button>
        <button id="loadPage2">Load Page 2</button>
    </div>
    <div id="content">
        <h1>home</h1>
    </div>
`;

document.getElementById('loadPage1').addEventListener('click', () => {
    console.log('click1')
    System.import('./page1')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default;
        })
});

document.getElementById('loadPage2').addEventListener('click', () => {
    console.log('click2')
     System.import('./page2')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default;
        })
});

if(module.hot) {
    module.hot.accept(); 
} 