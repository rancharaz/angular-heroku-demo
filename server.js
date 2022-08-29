const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('/dist/angular-heroku-demo'));

app.get('/*', (req,res)=> res.sendFile('index.html', {root: 'dist/angular-heroku-demo/'}), )

app.listen(process.env.PORT || 8080);
