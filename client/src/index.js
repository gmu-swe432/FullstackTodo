import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fetch('http://localhost:3000/todos').then(function(response) {
    return response.json();
})
    .then(function(json)
    {
        // Load initial DOM elements
        var generatedHTML = '<ul>';
        console.log(json);

        for (var keyValue in json) {
            generatedHTML += `<li><input type="text" value= ${json[keyValue]}"/></li>`;
        }

        generatedHTML += '</ul>';

        console.log(generatedHTML);
        //document.getElementById('todoContainer').innerHTML = generatedHTML;
    })
    .catch(function(error) { console.log(error); });



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
