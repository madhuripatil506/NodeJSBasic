var fs = require('fs');

var readStream = fs.createReadStream('files/file.txt', 'utf8');
var writeStream = fs.createWriteStream('files/write_file.txt');

readStream.on('data', function(chunk){
    console.log('---------------------------------------');
    writeStream.write(chunk);
})

readStream.on('end', function(){
    console.log('-----------------------End--------------------')
})