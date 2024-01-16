import request from '../../utils/request'
// pages/courseItem/courseItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseItem: {},
    stuList:[],
    stuIdList: [],
    show: false,
    scoreShow: false,
    score: "",
    submitScoreId:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      courseItem: JSON.parse(options.courseItem)
    })
    this.searchStu()
  },

  async addStudent() {
    this.setData({ show: false });
    let course = {
      id: this.data.courseItem.id,
      stuIds: this.data.stuIdList
    }
    await request('/hs/course/saveCourse',course,'post')
    this.searchStudentInfo()
  },

  async searchStu() {
    let url = "/hs/stu/selectStuList"
    let res = await request(url)
    let courseItem = this.data.courseItem.stuList
    var filterStudent = res.filter(itemA => {
      return !courseItem.some(itemB => itemA.id === itemB.id)
    })
    this.setData({
      stuList: filterStudent
    })
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
      stuIdList: event.detail,
    });
  },

  async searchStudentInfo () {
    let url = "/hs/course/selectCourseList?courseName=" +  this.data.courseItem.courseName
    let res = await request(url)
    let courseItem = res[0]
    this.setData({
      courseItem: courseItem
    })
  },

  async delStudent(event) {
    let studentId = event.currentTarget.dataset.studentid
    let url = "/hs/course/deleteStuOfCourse?courseId=" + this.data.courseItem.id + "&stuIds=" + studentId
    await request(url,{},"delete")
    this.searchStudentInfo()
  },

  async addScore(event) {
    let studentId = event.currentTarget.dataset.studentid
    this.setData({ 
      scoreShow: true,
      submitScoreId: studentId
    });
  },

  async scoreSubmit() {
    let url = "/hs/course/addScore?courseId=" + this.data.courseItem.id + "&stuId=" + this.data.submitScoreId + "&score=" + this.data.score
    await request(url)
    this.searchStudentInfo()
    this.setData({
      score: "",
      scoreShow: false
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
    // 页面卸载时的逻辑，即返回上一个页面时执行
    const pages = getCurrentPages();
    const prevPage = pages[pages.length - 2]; // 获取上一个页面实例对象

    if (prevPage && prevPage.searchCourse) {
      // 如果上一个页面存在并且有 refreshData 方法，则调用
      prevPage.searchCourse();
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.searchStudentInfo()
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