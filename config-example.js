var slackbot = require('./lib/bot');

var config = {
    bot_name: "WebexBot",//Provide the name to post under.  Default is WebexBo
    token: 'xoxp-3484685712-3484685714-3527053802-888acc',
    webex_urls: {
      "launch": "https://indiafreetrial.webex.com/meet/",//REPLACE THESE W/ YOUR COMPANY URLs
      "join": "https://indiafreetrial.webex.com/join/",
      "DEFAULT": "https://indiafreetrial.webex.com/"
    },
    pattern: /^\:webex\s+(personal\s+(\w+))\s*$/, //Default is: /webex personal username
    verbose: true,
    emoji: ":webex:"//NOTE: you'll need to add this emoji

};

//DO NOT EDIT BELOW HERE
var slackbot = new slackbot.Bot(config);
slackbot.run();
