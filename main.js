const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(80, () => {
    console.log('Server is running on port 80');
    }
);
