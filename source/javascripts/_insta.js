 var Instafeed = require("instafeed.js");

 var feed = new Instafeed({
        get: 'user',
        userId: '1535634507',
        limit: 8,
        accessToken: '1535634507.1677ed0.fb4276059fd2478297541e3e9e59624f',
        template:  '<div class="ig-item"><img src="{{image}}"></div>'
        
});
feed.run();