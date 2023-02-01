console.log(__filename);
console.log(__dirname);



function printHello() {
    console.log("Hello, World!");
}

var t = setTimeout(printHello, 2000);


// clearTimeout(t);


console.log('start');

var counter = 10;
console.log('计数：%d', counter);

console.time('获取数据');


console.timeEnd('获取数据')


console.info("程序执行完毕。")

