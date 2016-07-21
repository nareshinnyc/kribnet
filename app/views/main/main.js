var color = require("color");
var platform = require("platform");

function mainPageLoaded(args) {
    var page = args.object;
    
    if (platform.device.os === platform.platformNames.android) {
        // ------ ActionBar --------
        // Set ActionBar background color - done in XML/CSS
          
        // Set ActionBar title color
        var actionBarTextColor = new color.Color("white");
        page.actionBar._nativeView.setTitleTextColor(actionBarTextColor.android);
        
         
        // ------ TabView --------
        var tabView = page.getViewById("tabView");
        var tabContainer = tabView._tabLayout;
        
        // Set TabView background
        var bgColor = new color.Color("white");
        tabContainer.setBackgroundColor(bgColor.android);
        
        // Set TabView selected-indicator color
        var selectedIndicatorColor = new color.Color("green");
        tabContainer.setSelectedIndicatorColors([selectedIndicatorColor.android]);
        
        // Set title color of TabView items - currently no easy way to do it.
    }

}
exports.mainPageLoaded = mainPageLoaded;