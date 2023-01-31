var fs = require('fs');
var path = require('path');
var events = require('events');
// var http = require('http');
var https = require('https');
var eventEmitter = new events.EventEmitter();


//创建文件夹目录
var dirPath = path.join(__dirname, 'file');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log('文件夹已创建');
} else {
    console.log('文件夹已存在');
}

var urlJson;

fs.readFile('file/url.txt', function (err, data) {
    if (err) {
        return console.log(err);
    }
    urlJson = JSON.parse(data.toString());
    console.log(urlJson.length);
    eventEmitter.emit('download_file', urlJson);
});

var downloadFile = function (arr) {

    //循环多线程下载
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        // console.log(row);
        getUrlData(i, row);
    }
}

eventEmitter.on('download_file', downloadFile);


function parseJSON(str) {
    try{
        return JSON.parse(str);
    }catch(e){
        console.error(e);
        return str;
    }
}
var count = 0;
function getUrlData(i, row){
    var url1 = "https://equick-file.oss-cn-beijing.aliyuncs.com/" +  row.datestr + "/Wish/" + row.booking_cust_ref_no + row.timestr1 + ".txt";
    var url2 = "https://equick-file.oss-cn-beijing.aliyuncs.com/" +  row.datestr + "/Wish/" + row.booking_cust_ref_no + row.timestr2 + ".txt";
    var urlData = '';
    https.get(url1, (res) => {
        // console.log("第" + (i+1) + '状态码：', res.statusCode);
        if (res.statusCode == 200) {
            res.on('data', (chunk) => {
                urlData += chunk;
            });
            res.on('end', () => {
                // console.log('urlData:', urlData);
                var data = parseJSON(urlData);
                if (data.customs_clearance_mode == 2) {
                    count = count + 1;
                    console.log("小小包：", data.customs_clearance_mode , data.tracking_id, count);
                }
            });
        }
        if (res.statusCode == 404) {
            https.get(url2, (res2) => {
                // console.log("第" + (i+1) + '状态码：', res.statusCode);
                if (res2.statusCode == 200) {
                    res2.on('data', (chunk) => {
                        urlData += chunk;
                    });
                    res2.on('end', () => {
                        // console.log('urlData:', urlData);
                        var data = parseJSON(urlData);
                        if (data.customs_clearance_mode == 2) {
                            count = count + 1;
                            console.log("小小包：", data.customs_clearance_mode , data.tracking_id, count);
                        }
                    });
                }
                if (res2.statusCode == 404) {
                    // console.log("404：", row);
                }
            });
        }
    });
}
