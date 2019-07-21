console.log('The bot is loading...');
var Twit = require('twit');
var fs = require(fs);
var config =  require('./config');

var T = new Twit(config);
//console.log(config);

var stream = T.stream('user');

stream.on('tweet',tweetEvent);

function tweetEvent(eventMsg){
    
    var json = JSON.stringify(eventMsg,null,2);
    fs.writeFile("tweet.json",json);
    console.log('hi');
};