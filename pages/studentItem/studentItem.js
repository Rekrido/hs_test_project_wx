import request from '../../utils/request'
// pages/studentItem/studentItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentItem: {},
    show: false,
    courseList: [],
    courseIdList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      studentItem:JSON.parse(options.studentItem)
    })
    this.searchCourse()
  },
  
  async searchCourse() {
    let url = "/hs/course/selectCourseList"
    let res = await request(url)
    let courseChecked = this.data.studentItem.courseList
    var filterCourseList = res.filter(itemA => {
      return !courseChecked.some(itemB => itemA.id === itemB.id)
    })
    this.setData({
      courseList: filterCourseList
    })
  },

  async addCourse() {
    this.setData({ show: false });
    let student = {
      id:this.data.studentItem.id,
      courseIds:this.data.courseIdList
    }
    await request("/hs/stu/saveStu",student,"post")
    this.searchCourseInfo()
  },

  async searchCourseInfo () {
    let url = "/hs/stu/selectStuList?stuName=" +  this.data.studentItem.stuName
    let res = await request(url)
    let studentItem = res[0]
    this.setData({
      studentItem: studentItem
    })
  },

  async delCourse(event) {
    let courseId = event.currentTarget.dataset.courseid
    let url = "/hs/stu/deleteCourseOfStu?stuId=" + this.data.studentItem.id + "&courseIds=" + courseId
    await request(url,{},"delete")
    this.searchCourseInfo()
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ 
      show: false ,
      scoreShow: false
    });
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
    this.searchCourseInfo()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})