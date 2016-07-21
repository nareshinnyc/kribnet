var observableArray = require("data/observable-array");
var newsService = require("./news-service");
var page;

function newsPageLoaded(args) {
   page = args.object;
   newsService.getNews(handleResponse);
}

function handleResponse(news) {
    
    var newsItems = new observableArray.ObservableArray();
    for(var i=0;i<news.items.length;i++) {
        newsItems.push({"title": news.items[i].title});
    }
    page.bindingContext = {newsItems: newsItems};
}

exports.newsPageLoaded = newsPageLoaded;

