const fs = require('fs');

fs.copyFile("hey.txt", "./copy/hello.txt", function(err) {
    if (err) console.log(err);
    else console.log("done")
})


