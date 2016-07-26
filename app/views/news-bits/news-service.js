var http = require("http");

var URLS = {
    "topStories":"http://rss2json.com/api.json?rss_url=http://rss.nytimes.com/services/xml/rss/nyt/US.xml",
    "sports":"http://rss2json.com/api.json?rss_url=http://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
    "technology":"http://rss2json.com/api.json?rss_url=http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
    "science":"http://rss2json.com/api.json?rss_url=http://rss.nytimes.com/services/xml/rss/nyt/Science.xml"
}

function getNews(name, handleSuccess,handleFailure) {
    http.request({ url: URLS[name], method: "GET" }).then(function(response) {
        handleSuccess(name, response.content.toJSON());
    }, (handleFailure || hanldeError));    
}


function hanldeError() {
    alert("Newwork Error");
}

exports.getNews = getNews;