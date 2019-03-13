// pages/A/A.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logs: [{
      "id": 0,
      "img": "wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 1,
      "img": "wbanner2.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 2,
      "img": "wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 3,
      "img": "wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 4,
      "img": "wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 5,
      "img": "wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 6,
      "img": "wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 7,
      "img": "wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
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