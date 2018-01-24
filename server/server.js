const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page Not Found',
        name: 'Todo App v1.0'
    });
});


app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Mike',
            age: 31
        },
        {
            name: 'John',
            age: 62
        },
        {
            name: 'Helen',
            age: 32
        }
    ]);
});


app.listen(3000);

module.exports.app = app;