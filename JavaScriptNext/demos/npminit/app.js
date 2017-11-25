var express = require('express');
var app = express();

process.title = "myApp";

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});