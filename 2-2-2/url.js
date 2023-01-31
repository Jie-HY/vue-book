var fs = require('fs');
var path = require('path');
var request = require('request');
var events = require('events');
var http = require('http');
var eventEmitter = new events.EventEmitter();


//创建文件夹目录
var dirPath = path.join(__dirname, 'file');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log('文件夹已创建');
} else {
    console.log('文件夹已存在');
}

var urls;

fs.readFile('url.txt', function (err, data) {
    if (err) {
        return console.log(err);
    }
    urls = JSON.parse(data.toString());
    console.log(urls.length);
    eventEmitter.emit('download_file', urls);
});

var downloadFile = function (arr) {
    //循环多线程下载
    for (let i = 0; i < 1; i++) {
        let fileName = i + ".txt";
        let url = urls[i];
        console.log(url);
        var urlData = '';
        let stream = fs.createWriteStream(path.join(dirPath, fileName));
        request(url).pipe(stream).on('close', function (err) {
            console.log("文件[" + fileName + "]下载完毕");
        });
        // http.get(url).on('response', function (response) { 
        //     var body = ''; 
        //     var i = 0; 
        //     response.on('data', function (chunk) { 
        //         i++; body += chunk; console.log('BODY Part: ' + i); 
        //     }); 
        //     response.on('end', function () { 
        //         console.log(body); console.log('Finished'); 
        //     }); 
        // });

    }
}

eventEmitter.on('download_file', downloadFile);



