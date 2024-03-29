import request from '../../utils/request'
// pages/courseUpdate/courseUpdate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    courseName:'',
    teacherName:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let courseItem = JSON.parse(options.courseItem)
    this.setData({
      id: courseItem.id,
      courseName: courseItem.courseName,
      teacherName: courseItem.teacherName
    })
  },

  handelCancel() {
    wx.reLaunch({
      url: '/pages/course/course'
    })
  },

  async handelSubmit() {
    let course = {
      id: this.data.id,
      courseName: this.data.courseName,
      teacherName: this.data.teacherName,
    }
    request('/hs/course/updateCourse',course,'put')
    wx.reLaunch({
      url: '/pages/course/course'
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