import request from '../../utils/request'
// pages/addCourse/addCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseName:'',
    teacherName: '',
    stuList:[],
    stuIdList: [],
    show: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.searchStu()
  },

  handelCancel() {
    wx.reLaunch({
      url: '/pages/course/course'
    })
  },

  async handelSubmit() {
    let course = {
      courseName: this.data.courseName,
      teacherName: this.data.teacherName,
      stuIds: this.data.stuIdList
    }
    request('/hs/course/saveCourse',course,'post')
    wx.reLaunch({
      url: '/pages/course/course'
    })
  },

  async searchStu() {
    let url = "/hs/stu/selectStuList"
    let res = await request(url)
    this.setData({
      stuList: res
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
      stuIdList: event.detail,
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