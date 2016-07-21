var http = require("http");

var URL = "http://rss2json.com/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%3Fcf%3Dall%26hl%3Den%26pz%3D1%26ned%3Dus%26output%3Drss";

function getNews(cb) {
    http.request({ url: URL, method: "GET" }).then(function(response) {
        cb(response.content.toJSON());
    }, hanldeError);    
}


function hanldeError() {
    alert("Newwork Error");
}

exports.getNews = getNews;