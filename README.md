# FCC Xi'an WFE-Conf需求文档（简版）
> 本次Web-Conf活动页面，整体以移动端显示效果优先，适度优化PC端显示效果。基础栅格采用MUI框架相关组件，采用Vue.js开发。
## 0.导航栏header

顶部固定header,支持响应式，在小屏幕分辨率下变成汉堡状菜单。
## 1.主题图文

- 实现方案：
初步参照没有UI设计活动主题图的前提下，采取背景图为小图重复拼接，文本采取CSS定位方式实现。

- 备选方案：
YL联系Miya,争取相关设计图稿，后期可以替换。

## 2.大会简介

突出大会相关主题，填充相关文案。

## 3.分享嘉宾

以头像 + 姓名 + 简介的形式体现，根据屏幕分辨率有小到大，布局分别对应（行 x 列）： 8*1 、4*2 、2*4

## 4.活动流程

以时间线的形式对活动流程进行梳理。
每一项包含以下要点： 
- 时间
- 议题
- 相关主讲人

## 5.精彩现场

单纯的活动展示，组件前期写好，默认隐藏，活动结束后由YL用活动现场照片进行填充。

## 6.场地介绍

场地介绍，参照wdshare的方式，以场地介绍文本 + 百度地图API显示 + 场地相关照片展示。

## 7.关注主办方

展示相关活动相关群主的二维码及组织者联系方式。

## 8.本次活动组织者

**是否展示本次活动组织者名单，待定。**

- https://web-conf.tk/?nsukey=xYC%2Fy%2FEvtginhjd5Pl7IC%2FWuGOoyeD%2FqGv67CK1hOry3j1JRLZ8qzSoPAeymIAs5fjagU2YRUtf8dPxlU5ljVFEHPReneHWo9KW3k8a%2Bv4WoHBNz8MMwPHJt3dQxl3qQpIN5qFVsGqDrromNgPZAKKuhgcakdz1m9UuD4%2FBm59eZxr0ZXcus5Cp21A0YSonUm8XYCNGoahWa7vpoN4pQJg%3D%3D
- https://gmtc.geekbang.org/
- http://www.wdshare.org/active/5804779bf0af75643eac14fb#changdi

