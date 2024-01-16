import request from '../../utils/request';
// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseName: '',
    courseList: []
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.searchCourse()
  },

  async searchCourse() {
    let url = "/hs/course/selectCourseList"
    if (this.data.courseName != null &&  this.data.courseName != '') {
      url += "?courseName=" +  this.data.courseName
    }
    let res = await request(url)
    this.setData({
      courseList: res
    })
  },

  handAdd() {
    wx.navigateTo({
      url: '/pages/addCourse/addCourse',
    })
  },

  handelView(event) {
    var courseItem = event.currentTarget.dataset.courseitem
    wx.navigateTo({
      url: '/pages/courseItem/courseItem?courseItem=' + JSON.stringify(courseItem),
    })
  },

  updateCourse(event) {
    var courseItem = event.currentTarget.dataset.courseitem
    wx.navigateTo({
      url: '/pages/courseUpdate/courseUpdate?courseItem=' + JSON.stringify(courseItem),
    })
  },

  async deleteCourse(event) {
    let courseId = event.currentTarget.dataset.courseid
    await request("/hs/course/deleteCourse?id=" + courseId,{},"delete")
    this.searchCourse()
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
      courseName: ''
    })
    this.searchCourse()
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