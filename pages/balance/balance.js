// pages/balance/balance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    images: [
    ],
    food: [
      {

      }
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(e);
    let food = this.data.food;
    let foodList = [];
    let foodLength = e.foodLength;
    let tem = this;
    wx.getStorage({
      key: 'cargo',
      success: function (res) {
        foodList = res.data;
        console.log(foodList)
      },
      complete: function(){
        for(let i = 0 ;i<foodLength;i++){
          if (i < e.foodLength) {
            food[i] = foodList[i];
          }
        }
        tem.setData({
          food: food
        })
      }
    })
    //两层循环获得每一个food的foodId
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})