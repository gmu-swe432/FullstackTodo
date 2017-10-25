const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

var todos = {"0": "buy milk", "1": "walk the dog", "2": "do laundry"};
var nextID = 3;

app.get('/todos', function (req, res) {
    res.send(todos);
});

app.put('/todos/:id', function (req, res) {
    todos[req.params.id] = req.body.todo;
    res.send(200);
});

app.post('/todos', function (req, res) {
    todos[nextID] = req.body.todo;
    nextID++;
    res.send(200);
});

app.delete('/todos/:id', function (req, res) {
    delete todos[req.params.id];
    res.send(200);
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!')
});