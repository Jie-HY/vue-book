var fs = require('fs');
var data = '';

//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码
readerStream.setEncoding('UTF8');

// 处理流事件
readerStream.on('data', function(chunk){
    data += chunk;
});

readerStream.on('end', function(){
    console.log("read:",data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
})

console.log('read程序执行完毕');

var data2 = "小桥流水人家，古道西风瘦马。"
//创建可写流
var writeStream = fs.createWriteStream('output.txt');

// 使用utf-8 编码写入数据
writeStream.write(data2, 'UTF-8');

writeStream.end();
// writeStream.end("--Jie.HY");
writeStream.end(function(){
    console.log("end");
});

writeStream.on('finish', function () {
    console.log('写入完成。');
});


writeStream.on('error', function () {
    console.log(err.stack);
});

console.log('write程序执行完毕');