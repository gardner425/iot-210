'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.ea5427e3-b861-42e3-b3d7-493d803dc690";

var SKILL_NAME = "Weird Facts";
var GET_FACT_MESSAGE = "Here's your weird fact: ";
var HELP_MESSAGE = "You can say tell me a weird fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

var data = [
    "A traffic jam lasted lasted for more than 10 days, with cars only moving 0.6 miles a day.",
    "There are more lifeforms living on your skin than there are people on the planet.",
    "Otters sleep holding hands.",
    "Twenty percent of office coffee mugs contain fecal matter.",
    "Dueling is legal in Paraguay as long as both parties are registered blood donors.",
    "Caterpillars completely liquify as they transform into moths.",
    "There are over 200 corpses on Mount Everest and they are used as way points for climbers.",
    "A human will eat on average 70 assorted insects and 10 spiders while sleeping.",
    "Two-thirds of the people on Earth have never seen snow.",
    "A hummingbird weighs less than a penny",
    "There are more vacant houses than homeless people in the Unites States.",
    "The Woolly Mammoth was around when the Egyptian Pyramids were being built.",
    "The average American drinks about 600 sodas a year.",
    "The average person walks the equivalent of three times around the world in a lifetime.",
    "FDA regulations allow 10 insects and 35 fruit fly eggs per 8 ounces of raisins.",
    "A jellyfish is 95 percent water.",
    "You are 1 percent shorter in the evening than in the morning.",
    "It would take over 1,000 years to watch every video on YouTube.",
    "A hippo can open its mouth wide enough to fit a 4 foot tall child inside.",
    "A man named Charles Osborne had the hiccups for 69 years.",
    "A cockroach can live several weeks with its head cut off.",
    "Fifteen percent of the air you breathe in a metro station is human skin.",
    "The tongue is the strongest muscle in the human body.",
    "A giraffe can clean its own ears with its 21-inch tongue.",
    "A group of pugs is called a grumble.",
    "Men are 6 times more likely to be struck by lightning than women.",
    "Frozen lobsters can come back to life when thawed.",
    "Donald Duck comics were banned from Finland because he doesn't wear pants.",
    "French was the official language of England for over 600 years.",
    "You are more likely to die from a falling coconut than a shark attack.",
    "Our eyes are always the same size from birth, but our nose and ears never stop growing.",
    "The average person consumes a pound of insects per year, mostly mixed in from other foods.",
    "Coca-Cola would be green if coloring wasn’t added to it.",
    "The average mattress doubles in weight over the course of 10 years due to accumulation of dust mites and dust mite poop.",
    "Earth is the only planet not named after a god.",
    "Cows have best friends and experience stress when they are removed from them.",
    "Going to work is statistically three times more dangerous than war.",
    "Almost a quarter of the land area of Los Angeles is taken up by automobiles.",
    "An ostrich’s eye is bigger than its brain.",
    "If you sneeze too hard, you can fracture a rib.",
    "Polar Bears trying to blend in with the ice will cover up their black nose with their paws.",
    "It would take 1,200,000 mosquitoes, each sucking at once, to completely drain the average human of blood.",
    "Approximately 2,500 left handed people die a year as a result of using equipment designed for right handed people.",
    "Baby robins eat 14 feet of earthworms every day.",
    "The biggest tapeworm found inside a human body was 35 meters long.",
    "Blue Whale fart bubbles are large enough to enclose a horse.",
    "Due to breathing, your ribs move about five million times a year",
    "Only one person in two billion will live to be 116 or older.",
    "Since 1945, all British tanks come with tea making equipment."
];


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};