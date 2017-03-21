var Alexa = require('clay-alexa-sdk');

var destinations = [
  'Agata and Valentina',
  'Cava',
  'Chipotle',
  'Dig Inn',
  'Dorado',
  'Dos Toros',
  'Flats Fix',
  'Make Sandwich',
  'Maoz',
  'Num Pang',
  'Potbelly',
  'Roast',
  'Taboonette',
  'Whole Foods',
  'Wok to Walk'
];

var sentences = [
  'How about %s?',
  'You could try going to %s',
  'I\'ve heard %s is pretty good',
  '%s is always a good choice'
];

function makeDestinationSentence() {
  var destination = randVal(destinations);
  var sentence = randVal(sentences);
  return sentence.replace('%s', destination);
}

function randVal(arr) {
  var len = arr.length;
  var randPointer = Math.floor(Math.random() * len);
  return arr[randPointer];
}

exports.handler = function(event, context, callback) {
  var handlers = {
    GetLunchDestination: function() {
      var response = makeDestinationSentence();
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
