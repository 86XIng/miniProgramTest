//index.js
//获取应用实例
const app = getApp()
var connt = 0

Page({
 data:{
   images: [{ url:'../../image/1.jpg'}, 
     { url:'../../image/2.jpg'}, 
     { url:'../../image/3.jpg'}],
 },
 Order_Food:function(){
   wx.navigateTo({
     url: "../OrderFood/OrderFood"
   })
 }
 })