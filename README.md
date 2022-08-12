# fisherman
>  一个利用摸鱼时间搬来抄去写的谷歌浏览器摸鱼插件

## Project setup
```
yarn install

yarn serve

yarn  build 

<!-- 热加载 -->
yarn build-watch

```

## 安装步骤

在谷歌浏览器中打开链接 chrome://extensions/

打开开发者模式，加载已解压的扩展程序

选择打包生成的 dist 文件夹就可以了

## 插件默认值

1. 考勤时间默认为 9:00-18:00
2. 发薪日默认为每月 10 号
3. 工作制默认为双休
4. 点餐提醒默认值为空，也就是不提醒
5. 模式默认隐藏模式
6. 法定节假日信息需要在 src/holiday.js 文件中配置

## 功能
- [x] todolist 任务栏工具
- [x] 添加链接 快捷工具
- [x] 下班时间，周末，发薪日，法定节假日倒计时
- [x] 下班时间，周末，发薪日，法定节假日倒计时
- [x] 考勤时间可配置
- [x] 发薪日可配置
- [x] 点餐提醒可配置
- [x] 下班时，桌面弹窗提醒
- [x] 支持双休，大小周，单休工作制配置
- [ ] 法定节假日可配置


## 效果展示

### 页面

![demo1.jpg](https://raw.githubusercontent.com/yaoliqu/fisherman/master/src/assets/demo1.jpg)

![demo2.jpg](https://raw.githubusercontent.com/yaoliqu/fisherman/master/src/assets/demo2.jpg)

![demo3.jpg](https://raw.githubusercontent.com/yaoliqu/fisherman/master/src/assets/demo3.jpg)

### 设置

![demo4.jpg](https://raw.githubusercontent.com/yaoliqu/fisherman/master/src/assets/demo4.jpg)


### 通知

![demo5.jpg](https://raw.githubusercontent.com/yaoliqu/fisherman/master/src/assets/demo5.jpg)


### 参考自  [GaoWeiQiang1996/go-home-vue](https://gitee.com/GaoWeiQiang1996/go-home-vue)


### 喜欢的话给个免费的 star 吧！！！