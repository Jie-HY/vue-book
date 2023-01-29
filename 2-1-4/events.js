// 引入 events 模块
var events = require('events');

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//事件以及事件处理
var connectionHandler = function(){
    console.log('连接成功。');
    // 触发 data_received 事件
    eventEmitter.emit('data_received');
}

//绑定事件以及事件的处理程序
eventEmitter.on('connection', connectionHandler);

//使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
    console.log('数据接受成功。');
});

// 触发 connection 事件

eventEmitter.emit('connection');