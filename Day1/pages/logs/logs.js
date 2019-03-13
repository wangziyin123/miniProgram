// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = [{
      "id": 0,
      "img": "../../img/wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 1,
      "img": "../../img/wbanner2.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 2,
      "img": "../../img/wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 3,
      "img": "../../img/wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 4,
      "img": "../../img/wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 5,
      "img": "../../img/wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 6,
      "img": "../../img/wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }, {
      "id": 7,
      "img": "../../img/wbanner1.png",
      "name": "狂想情人",
      "writer": "作者:暗黑兔文化",
      "txt": "记住了,渣男必须死"
    }]

    this.setData({
      list
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
    // wx.request({
    //   url: 'http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5',
    //   success(res) {
    //     console.log(res.data.data)
    //   }
    // })

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
    // console.log(1)
    this.onLoad();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let list = this.data.list;
    this.data.list.map((x,y)=>{
      list.push(x)
    })
    this.setData({
      list
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})