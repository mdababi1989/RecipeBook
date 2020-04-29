//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/angular-recipe'));
app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/angular-recipe/'});
});
app.listen(process.env.PORT || 8080);
