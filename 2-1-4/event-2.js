var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function(){
    console.log('some_event 事件触发');
});


setTimeout(function(){
    event.emit('some_event');
}, 1000);



var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('someEvent', function(arg1, arg2){
    console.log('listner1', arg1, arg2);
});

eventEmitter.on('someEvent', function(arg1, arg2){
    console.log('listener2', arg1, arg2);
});

eventEmitter.emit('someEvent', 'arg1 参数', 'arg2 参数')