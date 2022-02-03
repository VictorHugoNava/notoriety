let fs = require('fs')
let path = require('path');

let directory = process.argv[2];
let ext = '.' + process.argv[3];

fs.readdir(directory, function (err, list) {
    if (err) {
        return console.log(err);
    }

    list.forEach(function(list) {
        if (path.extname(list) === ext) {
            console.log(list);
        };
    });
});