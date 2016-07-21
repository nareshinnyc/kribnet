var frameModule = require("ui/frame");


function onLogin(eventData) {
    var topmost = frameModule.topmost();
    topmost.navigate("views/main/main");
}

exports.onLogin = onLogin;