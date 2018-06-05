# gulp-scss
#查看是否安装成功：
node -v
npm -v
#安装gulp
npm install gulp
#查看是否安装成功：
gulp -v
#首先，初始化一个工程文件：package.json，记录安装的依赖包
#然后，安装gulp并记录到：package.json
npm install gulp --save-dev
#简写命令
npm i gulp -D
#配置gulp 
#gulp的配置存储在：gulpfile.js 文件里面，这个文件名是固定写法
说到底，也就是个js文件，写Gulp配置跟node开发很相似，用到哪个模块require就可以。
Gulp只有五个方法： task、src、dest、watch和run。
配置完成，使用之前，要把gulp配置中的包（模块）下载到本地项目：
#当前用到2个模块
npm i gulp-sass gulp-rename -D
或者
npm init -y
#自动编译scss文件style.scss
#运行Gulp：
#运行默认任务
gulp default
#运行默认任务的简写：
gulp
#任务多的时候，可以单独指定某个任务
gulp sass
就能看到css里文件更新了^_^
