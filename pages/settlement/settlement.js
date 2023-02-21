
// pages/settlement/settlement.js
Page({

    /**
     * 页面的初始数据
     */

    data: {
        zhuang_list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        xia_list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        dui_list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        shang_list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        tong_list:[1,2,3,4,5,6,7,8,9],
        tiao_list:[1,2,3,4,5,6,7,8,9],
        wan_list:[1,2,3,4,5,6,7,8,9],
        feng_list:[1,2,3,4],
        yuan_list:[1,2,3],
        keyboard_display:true,
        keyboard_list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        player_name:"",
        tab:[],
        num:[],
        url:[],
        zhuang_selected:[],
        xia_selected:[],
        dui_selected:[],
        shang_selected:[]
    },
    keyboard_clicked:function(e){
        let name = e.currentTarget.dataset['name'];
        this.setData({
            keyboard_display:false,
            player_name:name
            
        })
    },
    keyboard_cancel:function(){
        this.setData({
            keyboard_display:true,
        })
    },
    keyboard_comfirm:function(e){
        let name = this.data.player_name;
        console.log(name);
        if(name == '庄家'){
            this.setData({
                zhuang_selected:this.data.url
            })
        }
        else if(name == '下家'){
            this.setData({
                xia_selected:this.data.url
            })
        }
        else if(name == '对家'){
            this.setData({
                dui_selected:this.data.url
            })
        }
        else{
            this.setData({
                shang_selected:this.data.url
            })
        }
        this.setData({
            keyboard_display:true,
        })
    },
    card_clicked:function(e){
        let cardtab = e.currentTarget.dataset['cardtab'];
        let cardnum = e.currentTarget.dataset['cardnum'];

        var arr0 = [];
        var str = "../image/card_mj/card_mj_";
        str = str + cardtab + "_" + cardnum + ".svg";
        arr0[0] = str;
        this.data.url = this.data.url.concat(arr0);

        this.setData({
            url:this.data.url
        })
    },
    card_del:function(){
        if (this.data.url.length != 0) {
            this.data.url.splice(this.data.url.length - 1, 1);
            this.setData({
                url:this.data.url
            })          
          }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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