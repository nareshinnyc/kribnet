var observableArray = require("data/observable-array");
var newsService = require("./news-service");
var subscriptions   = ["topStories", "sports", "technology", "science"];
var loaded = [];
var page, pullRefresh, bindingContext;


function newsPageLoaded(args) {
   page = args.object;
   pullRefresh = page.getViewById("pullRefresh");
   bindingContext = new observableArray.ObservableArray();
   loadSubscriptions();
}

function handleResponse(subscription, news) {
    var newsItems = [];
    for(var i=0;i<3;i++) {
        newsItems.push({"title": news.items[i].title, "enclosure": news.items[i].enclosure});
    }
    bindingContext[subscription] = newsItems;
    loaded.push(subscription);
    render();
    
}

function render() {
    if(loaded.length === subscriptions.length) {
         console.log("Rendering....");
         page.bindingContext = bindingContext;
         pullRefresh.refreshing = false;
    }
}

function hanldeError() {
    pullRefresh.refreshing = false;   
}

function loadSubscriptions() {
    loaded = [];
    subscriptions.forEach(function(subscription) { 
        newsService.getNews(subscription, handleResponse, hanldeError);
    });
}

exports.newsPageLoaded = newsPageLoaded;
exports.refreshNews = loadSubscriptions;