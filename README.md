# 项目说明：
* 是在readability开源项目的基础上增加了phantoms对动态网页的支持。


# 发布ycc-node-readability：
* https://www.npmjs.com 网址上面注册用户
* 将工程打包copy至服务器，在根目录下面修改package.json中的版本号
```
"name": "ycc-node-readability",
  "version": "1.0.0",
  "author": "lihaiou",
  "description": "Turning any web page into a clean view.",
  "homepage": "https://github.com/luin/node-readability",
  "repository": {
    "type": "git",
    "url": "git://github.com/luin/node-readability.git"
  },
```
修改version
* 执行npm adduser,输入在https://www.npmjs.com  上面的用户名，密码和邮箱
* 执行npm publish
* 需要使用的地方执行: npm install ycc-node-readability
