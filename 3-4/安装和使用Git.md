#Git的基本操作
    1、git init                         初始化Git项目
    2、git clone *****                  克隆远程库，需要使用$ git clone命令克隆一个本地库，该命令会自动克隆一个master分支，通过新建本地分支之后再同步
    3、git checkout -b dev origin/dev   将远程origin的dev分支拉取到本地的dev分支中
    4、git pull                         本地同步远程分支中的代码
    5、git branch                       查看当前分支
    6、git branch -a                    查看当前的远程分支
    7、git branch -d <filename>         删除一个分支
    8、git checkout -b feature          创建一个feature分支，然后切换到此分支
        等同
            get branch feature
            get checkout feature
    9、git add+git commit -m "" git     git add是暂存文件命令，git commit是提交代码命令，""中的内容是本次提交的说明
    10、git merge feature               合并feature分支
        git merge --no-ff feature
    11、git branch -d feature           删除相关分支