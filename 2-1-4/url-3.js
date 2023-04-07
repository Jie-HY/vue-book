var fs = require('fs');
var path = require('path');
var events = require('events');
var events = require('events');
// var http = require('http');
var https = require('https');
const { clearInterval } = require('timers');
var eventEmitter = new events.EventEmitter();


//创建文件夹目录
var dirPath = path.join(__dirname, 'pdf');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log('文件夹已创建');
} else {
    console.log('文件夹已存在');
}

var urlJson;
var total = 0;
fs.readFile('file/url-4.txt', function (err, data) {
    if (err) {
        return console.log(err);
    }
    urlJson = JSON.parse(data.toString());
    total = urlJson.length;
    console.log(total);
    eventEmitter.emit('download_file', urlJson);
});

var downloadFile = function (arr) {

    //循环多线程下载
    for (let i = 0; i < arr.length; i++) {
        let url = arr[i];
        // console.log(row.url);
        getUrlData(i, url);
    }
}

eventEmitter.on('download_file', downloadFile);


// function parseJSON(str) {
//     try{
//         return JSON.parse(str);
//     }catch(e){
//         // console.error(e);
//         return str;
//     }
// }
// var count = 0;
// var urlArr = new Array();
function getUrlData(i, url){
    let buffer = Buffer.from(url);
    let index = buffer.lastIndexOf("/");
    let fileName =url.substring(index+1);
    console.log(fileName);
    https.get(url, (res) => {
        let chunks = [];
        if (res.statusCode == 200) {
            res.on('data', (chunk) => {
                chunks.push(chunk);
            });
            res.on('end', () => {
                var writeStream = fs.createWriteStream("pdf/"+fileName);
                // 使用utf-8 编码写入数据
                writeStream.write(new Buffer.concat(chunks), 'UTF-8');
                writeStream.end();
            });
        }
        if (res.statusCode == 404) {
            console.log("404：", url);
        }
    });
}

// var itv = setInterval(function(){
//     if(count >= total){
//         console.log(urlArr.length);
//         console.log("结束。");
//         clearInterval(itv);
//     }
// }, 1000);