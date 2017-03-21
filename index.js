var Alexa = require('clay-alexa-sdk');

var destinations = [
  'Agata and Valentina',
  'Cava',
  'Chipotle',
  'Dorado',
  'Dos Toros',
  'Make Sandwich',
  'Num Pang',
  'Taboonette'
];

var sentences = [
  'How about %s?',
  'You could try going to %s',
  'I\'ve heard %s is pretty good',
  '%s is always a good choice'
];

exports.handler = function(event, context, callback) {
  var handlers = {
    GetLunchDestination: function() {
      var destination = randVal(destinations);
      var sentence = randVal(sentences);
      var response = sentence.replace('%s', destination);
      this.emit(':tell', response);
    },
    Unhandled: function() {
      this.emit(':tell', 'I don\'t understand the question, I guess I must have low blood sugar');
    }
  };
  var alexa = Alexa.handler(JSON.parse(event.body), context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

function randVal(arr) {
  var len = arr.length;
  var randPointer = Math.floor(Math.random() * len);
  return arr[randPointer];
}


