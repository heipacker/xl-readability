var page = require('webpage').create();
var args = require('system').args;
var url = args[1];

page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';
page.open(url, function () {
    page.evaluate(function () {

    });
    console.log(page.content);
    setTimeout(function () {
        phantom.exit();
    }, 2000);
});
