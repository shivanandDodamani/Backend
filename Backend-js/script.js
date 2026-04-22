const fs = require('fs');

fs.rmdir("./copy",{recursive: true}, function(err){
    if(err) console.error(err);
    else console.log("removed");
})


