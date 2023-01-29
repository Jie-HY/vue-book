const http = require('http');

http.createServer(function(request, response){
    //返回HTTP头部信息
    //返回HTTP相应的状态码：200（请求成功）
    //返回数据内容的类型：text/plain
    //指定返回的code以及形式s
    response.writeHead(200, {'Content-Type': 'text/html'});
    //发送HTML文档
    //打印输出一个<h1>元素
    response.end('<h1>Hello Word</h1>');

}).listen(3000);

//通过console打印相关的提示信息
console.log('Server running at http://127.0.0.1:3000/');

//Window中，在命令窗口使用如下命令启动
// node "HelloWorld.js" Server running at http://127.0.0.1:3000/