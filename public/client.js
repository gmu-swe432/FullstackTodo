
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

        document.getElementById('todoContainer').innerHTML = generatedHTML;
    })
    .catch(function(error) { console.log(error); });

document.getElementById('Create todo').addEventListener('click', function(e)
    {
        console.log(JSON.stringify(e));

        console.log('button click');
    }
);









