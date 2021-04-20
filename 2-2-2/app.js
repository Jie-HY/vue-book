//引入Express模块和实例化
const express = require('express');
const app = express();

//设定根路由显示Hello World
app.get('/', (req, res) => res.send('Hello World!'));

//监听3000端口为HTTP服务
app.listen(3000, () => console.log('Example app listening on port 3000!'))