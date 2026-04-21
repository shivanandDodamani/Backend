const fs = require('fs');

fs.rename("hey.txt", "hello world", function(err){
    if(err) console.log(err);
    else console.log("done");
})


