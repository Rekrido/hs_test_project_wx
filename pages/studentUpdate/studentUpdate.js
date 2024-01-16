import request from '../../utils/request'
// pages/studentUpdate/studentUpdate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    studentName: '',
    studentNo: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let studentItem = JSON.parse(options.studentItem)
    this.setData({
      id: studentItem.id,
      studentName: studentItem.stuName,
      studentNo: studentItem.stuNo
    })
  },

  handelCancel() {
    wx.reLaunch({
      url: '/pages/student/student'
    })
  },

  async handelSubmit() {
    let student = {
      id: this.data.id,
      stuNo: this.data.studentNo,
      stuName: this.data.studentName
    }
    request('/hs/stu/updateStu',student,'put')
    wx.reLaunch({
      url: '/pages/student/student'
    })
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