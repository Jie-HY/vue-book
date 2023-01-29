# Node.js读书笔记
	1、配置项	命令	描述
	devDependencies	
		--save-dev 简写 -D	
		开发环境，管理的依赖包仅在开发阶段有效
	dependencies	
		--save 简写 -S	
		生产环境，管理的依赖包在项目上线后依然有效
	2、使用 npm i 安装package.json里的依赖时，两部分的包都会pull下来
     2-1、使用 --prod、
              npm i --prod <=> npm i --production  // 仅会拉取dependencies中的依赖

     2-2、设置NODE_DEV=production时            // 效果同上，仅会拉取dependencies中的依赖 (注意等号两边没空格)

              2-2-1、命令行设置（注意不同环境时的"分割符"）

                          window => cmd ：set NODE_ENV=production && xxxx

                          mac      => shell  : NODE_ENV=production 空格 xxxx

              2-2-2、package.json=>script命令中设置
					set NODE_ENV=development && set EGG_SERVER_ENV+local && node .
					NODE_ENV=production EGG_SERVER_ENV=prod node .
	3、npm install有以下几种方式：
		npm install moduleName # 安装模块到项目目录下
		npm install -g moduleName # -g 的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm config prefix 的位置。
		npm install --save moduleName # --save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
		npm install --save-dev moduleName # --save-dev 的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。
		
		具体说明如下：
			npm install X -g
				安装模块到全局，不会在项目node_modules目录中保存模块包。
				不会将模块依赖写入devDependencies或dependencies 节点。
				运行 npm install 初始化项目时不会下载模块。
			
			npm install X
				会把X包安装到node_modules目录中
				不会修改package.json
				之后运行npm install命令时，不会自动安装X
				
			npm install X --save
				会把X包安装到node_modules目录中
				会在package.json的dependencies属性下添加X
				之后运行npm install命令时，会自动安装X到node_modules目录中
				之后运行npm install --production或者注明NODE_ENV变量值为production时，会自动安装msbuild到node_modules目录中,即是在线上环境运行时会将包安装
				
			npm install X –save-dev
				会把X包安装到node_modules目录中
				会在package.json的devDependencies属性下添加X
				之后运行npm install命令时，会自动安装X到node_modules目录中
				之后运行npm install –production或者注明NODE_ENV变量值为production时，不会自动安装X到node_modules目录中
			使用原则:
				devDependencies 节点下的模块是我们在开发时需要用的，比如项目中使用的 gulp ，压缩css、js的模块。这些模块在我们的项目部署后是不需要的，所以我们可以使用--save-dev的形式安装。像 express 这些模块是项目运行必备的，应该安装在 dependencies 节点下，所以我们应该使用--save的形式安装。
				总结为一句话：运行时需要用到的包使用––save，否则使用––save-dev。
				
	4、npm install dependencies 默认将所有指定的软件包保存到其中。此外，您可以使用一些其他标志来控制在何处以及如何保存它们：

		-P, --save-prod：包将出现在您的中 dependencies。这是默认设置，除非 -D 或 -O 存在。
		-D, --save-dev：包将出现在您的中 devDependencies。
		-O, --save-optional：包将出现在您的中 optionalDependencies。
		--no-save：防止保存到 dependencies。
		使用上述任何选项将依赖项保存到 package.json 时，还有两个附加的可选标志：

		-E, --save-exact 注意：保存的依赖项将使用确切的版本配置，而不是使用 npm 的默认 semver range 运算符。
		-B, --save-bundle：保存的依赖项也将添加到您的 bundleDependencies 列表中。
		此外，如果您具有 npm-shrinkwrap.json 或，package-lock.json 那么它也会被更新。

		<scope>是可选的。该包将从与指定范围关联的注册表中下载。如果没有注册表与给定范围相关联，则采用默认注册表。请参阅 npm-scope。

		注意：如果您的作用域名称上未包含 @ -symbol，则 npm 会将其解释为 GitHub 存储库，请参见下文。范围名称也必须后面加上斜杠。	
