import request from '../../utils/request'
// pages/addStu/addStu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentName: "",
    studentNo: "",
    courseList: [],
    courseIdList: [],
    show: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.searchCourse()
  },

  handelCancel() {
    wx.reLaunch({
      url: '/pages/student/student'
    })
  },

  async handelSubmit() {
    let student = {
      stuName: this.data.studentName,
      stuNo: this.data.studentNo,
      courseIds: this.data.courseIdList
    }
    request('/hs/stu/saveStu',student,'post')
    wx.reLaunch({
      url: '/pages/student/student'
    })
  },


  async searchCourse() {
    let url = "/hs/course/selectCourseList"
    let res = await request(url)
    this.setData({
      courseList: res
    })
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onChange(event) {
    this.setData({
      courseIdList: event.detail,
    });
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