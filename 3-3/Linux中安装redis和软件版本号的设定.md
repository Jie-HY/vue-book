#redis的安装方式：
    1、YUM的方式安装
    2、命令方式安装
        1）wget命令下载安装包
            步骤一：wget http://download.redis.io/releases/redis-5.0.7.tar.gz
            步骤二；tar -zxvf 下载文件名称
            步骤三：cd 相应的代码包
                cd src
            步骤四：make test（可以测试安装包是否能正常操作，如果提示缺少tcl组件）
            步骤五：yum install tcl
            步骤六：make install
        注意：有些CentOS版本没有安装gcc，无法使用make命令编译代码，需要先使用yum install gcc命令安装gcc。
        最后，安装完成后，在src文件夹下输入如下命令启动redis
            ./redis-server
#版本号
    版本号的设定一般使用3个数字：
        1、第1个数字一般认为是重大的正式版本或重大重构；
        2、第2个数字一般认为是重大的功能改进和更新；
        3、第3个数字一般是小升级或Bug问题的修复；
    例如，软件产品刚发布时的正式版本号一般为1.0.0
    注意：版本号可能会出现0.X.X的形式，一般认为该软件并没有一个正式的版本，也就是说该软件尚处于开发或测试阶段。