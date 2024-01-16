import request from '../../utils/request';
// pages/student/student.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuName: "",
    stuList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.searchStu()
  },

  async searchStu() {
    let url = "/hs/stu/selectStuList"
    if (this.data.stuName != null &&  this.data.stuName != '') {
      url += "?stuName=" +  this.data.stuName
    }
    let res = await request(url)
    this.setData({
      stuList: res
    })
  },

  handAdd() {
    wx.navigateTo({
      url: '/pages/addStu/addStu',
    })
  },

  handelView(event) {
    let studentItem = event.currentTarget.dataset.stuitem
    wx.navigateTo({
      url: '/pages/studentItem/studentItem?studentItem=' + JSON.stringify(studentItem),
    })
  },

  updateStudent(event) {
    var studentItem = event.currentTarget.dataset.studentitem
    wx.navigateTo({
      url: '/pages/studentUpdate/studentUpdate?studentItem=' + JSON.stringify(studentItem),
    })
  },

  async deleteStudent(event) {
    let studentId = event.currentTarget.dataset.studentid
    await request("/hs/stu/deleteStu?id=" + studentId,{}, "delete")
    this.searchStu()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
      stuName: ''
    })
    this.searchStu()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})