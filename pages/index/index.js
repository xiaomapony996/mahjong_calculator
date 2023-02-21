// index.js


Page({
  // 隐藏选择菜单

  // 初始化
  data:{
    MenuDisplay:"none",
    img_list:[1,2,3,4,5,6],
    card_list:["top","bottom","left","right"],
    count_x:1,
    count_y:6,
    dice_min_top:0,
    dice_min_bottom:0,
    dice_min_left:0,
    dice_min_right:0,
    table_version:0

  },
  // 点击中心骰子弹出选择菜单
  menu_clicked:function(){
    this.setData({
      MenuDisplay:"block"
    })
  },
  // 点击“取消”隐藏菜单，去除骰子选中样式
  menu_cancel:function(){
    this.setData({
      MenuDisplay:"none",
      num_x:null,
      num_y:null
    })
  },
  // 点击“确定”更改牌堆样式，去除骰子选中样式
  menu_confirm:function(){
    let x = this.data.count_x;
    let y = this.data.count_y;
    let min = 0;
    let sum = x + y;
    let min_top,min_bottom,min_left,min_right = 0;
    if(x<y){
      min=x;
    }else if(x>y){
      min = y;
    }else{
      min = x;
    }
    if(sum==5||sum==9){
      min_bottom = min;
    }else if(sum==2||sum==6||sum==10){
      min_right = min;
    }else if(sum==3||sum==7||sum==11){
      min_top  = min;
    }else if(sum==4||sum==8||sum==12){
      min_left = min;
    }
    this.setData({
      MenuDisplay:"none",
      dice_min_top:min_top,
      dice_min_bottom:min_bottom,
      dice_min_left:min_left,
      dice_min_right:min_right,
      table_version:1

    });
    },
    dice_x_clicked:function(event){
      let dice_index=event.currentTarget.dataset.dice_x;
      this.setData({
        num_x:dice_index,
        count_x:dice_index+1
      })
    },
    dice_y_clicked:function(event){
      let dice_index=event.currentTarget.dataset.dice_y;
      this.setData({
        num_y:dice_index,
        count_y:dice_index+1
      })
    },
    menu_reset:function(){
      this.setData({
        MenuDisplay:"none",
        img_list:[1,2,3,4,5,6],
        card_list:["top","bottom","left","right"],
        count_x:1,
        count_y:6,
        dice_min_top:0,
        dice_min_bottom:0,
        dice_min_left:0,
        dice_min_right:0,
        num_x:null,
        num_y:null,
        table_version:0     
      })
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
      return {
        title: '新手麻将计算器',
        path: 'pages/index/index'
      }
    }

})
