# Git的基本操作
> git init                         初始化Git项目
> git clone *****                  克隆远程库，需要使用$ git clone命令克隆一个本地库，该命令会自动克隆一个master分支，通过新建本地分支之后再同步
> git checkout -b dev origin/dev   将远程origin的dev分支拉取到本地的dev分支中
> git pull                         本地同步远程分支中的代码
> git branch                       查看当前分支
> git branch -a                    查看当前的远程分支
> git branch -d <filename>         删除一个分支
> git checkout -b feature          创建一个feature分支，然后切换到此分支
    等同
        get branch feature
        get checkout feature
> git add+git commit -m "" git     git add是暂存文件命令，git commit是提交代码命令，""中的内容是本次提交的说明
> git merge feature               合并feature分支
    git merge --no-ff feature
> git branch -d feature           删除相关分支
> git push                        推送至远程仓库
    示例：
        git push -u origin feature-D
        git push -u origin master
> git remote add                   添加远程仓库
    示例：
        git remote add origin git@github.com:github-book/git-tutoral.git
> git remote -v                   查看远程仓库地址

# 查看分支
> git branch 查看本地分支
> git branch -a 查看当前所在分支及远程分支
> git branch -r 查看远程分支
> git branch -vv 查看本地分支与远程分支的关联关系

# 生成ssh密钥
> ssh-keygen -t rsa -C 'xxx@xxx.com' # -C 后写你的邮箱 一路回车

# 查看账户和邮箱
- git config --list
- git config user.name
- git config user.email

# 修改账户和邮箱
- git config --global user.name "xxx" 
- git config --global user.email "xxx"

# 移除Git全局配置
- git config --global --unset user.name
- git config --global --unset user.email
- Jie.HY
- yangjie_2021@126.com