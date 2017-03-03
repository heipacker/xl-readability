var page = require('webpage').create();
var args = require('system').args;
var url = args[1];

page.open(url, function () {
    page.evaluate(function(){

    });
    console.log(page.content);
    phantom.exit();
});
