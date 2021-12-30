const app = require('express')();

const PORT = process.env.PORT || 1234;

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.listen(PORT);