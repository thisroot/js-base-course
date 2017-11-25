console.log("TestsRunning");

var loadtest = require('loadtest');
var options = {
    url: 'http://localhost:3000',
    maxRequests: 1000,
};

loadtest.loadTest(options, function(error, result)
{
    if (error)
    {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
    console.log(result);
});