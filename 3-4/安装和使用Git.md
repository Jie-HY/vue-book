# Git的基本操作
    git init     
    git branch                       查看当前分支，列出所有本地分支
    git branch -a                    查看所有分支
    git branch -r                    列出所有远程分支
    git branch -d <filename>         删除一个分支
    git branch -d feature            删除本地feature分支

# 初始化
git init 

# 克隆远程仓库
git clone *****                  克隆远程库，需要使用$ git clone命令克隆一个本地库，该命令会自动克隆一个master分支，通过新建本地分支之后再同步

# 暂存和提交
git add是暂存文件命令，git commit是提交代码命令，""中的内容是本次提交的说明
git add+git commit -m "" git     git add是暂存文件命令，git commit是提交代码命令，""中的内容是本次提交的说明

# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 查看所有分支
git branch -r 

# 新建一个分支，但依然停留在当前分支
git branch [branch-name]

# 新建一个分支，并切换到该分支
git checkout -b [branch]
git checkout -b dev origin/dev   将远程origin的dev分支拉取到本地的dev分支中
git checkout -b feature          创建一个feature分支，然后切换到此分支
    等同
        get branch feature
        get checkout feature


# 合并指定分支到当前分支
git merge [branch]
git merge feature               合并feature分支到当前分支
git merge --no-ff feature

# 删除分支
git branch -d [branch-name]

# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]

# 本地同步远程分支中的代码
git pull

# 推送至远程仓库
git push                        
    示例：
        git push -u origin feature-D
        git push -u origin master

# 添加远程仓库
git remote add
    示例：
        git remote add origin git@github.com:github-book/git-tutoral.git

# 刷新远程仓库
git -c core.quotepath=false -c log.showSignature=false fetch origin --recurse-submodules=no --progress --prune

# 更新远程仓库
git remote update origin --prune

# 克隆 使用用户名和密码
git clone http://userName:password@链接
git clone https://username:password@链接
git clone http://yangjie:1234qwerXP.@60.205.182.5:3000/lijia/zqdn-hn.git