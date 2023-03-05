// pages/settlement2/settlement2.js

Page({

    /**
     * 页面的初始数据
     */

    data: {
        dui_list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        peng_list:[1,2,3,4,5,6,7,8,9,10,11,12],
        gang_list:[1,2,3,4,5,6,7,8,9,10,11,12],
        shun_list:[1,2,3,4,5,6,7,8,9,10,11,12],
        tong_list:[1,2,3,4,5,6,7,8,9],
        tiao_list:[1,2,3,4,5,6,7,8,9],
        wan_list:[1,2,3,4,5,6,7,8,9],
        feng_list:[1,2,3,4],
        yuan_list:[1,2,3],
        keyboard_display:true,
        settlement_display:true,
        keyboard_list:[],
        player_name:"",
        tab:[],
        num:[],
        url:[],
        dui_selected:[],
        peng_selected:[],
        gang_selected:[],
        shun_selected:[],
        cardpool:[],
        dui_count:{},
        dui_sum:0,
        peng_count:{},
        peng_sum:0,
        gang_count:{},
        gang_sum:0,
        shun_count:{},
        shun_sum:0,
        card_type:[]

    },
    keyboard_clicked:function(e){
        let name = e.currentTarget.dataset['name'];
        let cur_list = [];
        if(name == '对'){
            cur_list = this.data.dui_list;
        }
        else if(name == '碰'){
            cur_list = this.data.peng_list;
        }
        else if(name == '杠'){
            cur_list = this.data.gang_list;
        }
        else{
            cur_list = this.data.shun_list;
        }
        this.setData({
            keyboard_display:false,
            player_name:name,
            keyboard_list:cur_list
        })
    },
    keyboard_cancel:function(){
        let arr = [];
        this.setData({
            keyboard_display:true,
            url:arr
        })
    },
    keyboard_comfirm:function(e){
        let name = this.data.player_name;
        let cardpool = this.data.cardpool;
        let card_type = this.data.card_type;
        let arr = [];

        if(name == '对'){
            let cur_dui = null;
            let pre_dui = null;
            let dui_count = {tong_dui:0,tiao_dui:0,wan_dui:0,feng_dui:0,yuan_dui:0};
            for(let i=0;i<cardpool.length;i++){
                cur_dui = cardpool[i];
                card_type = card_type.concat(cur_dui['tab']);
                if(pre_dui != null){
                    if(cur_dui['tab']==pre_dui['tab']&&cur_dui['num']==pre_dui['num']){
                        if(cur_dui['tab']=='tong'){
                            dui_count['tong_dui'] += 1;
                        }
                        else if(cur_dui['tab']=='tiao'){
                            dui_count['tiao_dui'] += 1;
                        }
                        else if(cur_dui['tab'] =='wan'){
                            dui_count['wan_dui'] += 1;
                        }
                        else if(cur_dui['tab'] =='feng'){
                            dui_count['feng_dui'] += 1;
                        }
                        else{
                            dui_count['yuan_dui'] += 1;
                        }
                        pre_dui = null;
                    }
                }
                else{
                    pre_dui = cur_dui;
                }
            }
            this.setData({
                dui_selected:this.data.url,
                cardpool_dui:this.data.cardpool,
                cardpool:arr,
                dui_count:dui_count,
                dui_sum:dui_count['tong_dui'] + dui_count['tiao_dui'] + dui_count['wan_dui'] + dui_count['feng_dui'] + dui_count['yuan_dui'],
                card_type:card_type
            })
            console.log(this.data.dui_count,this.data.dui_sum,card_type)
        }
        else if(name == '碰'){
            let cur_peng = null;
            let pre_peng = null;
            let peng_count = {tong_peng:0,tiao_peng:0,wan_peng:0,feng_peng:0,yuan_peng:0};

            let count = 0;

            for(let i=0;i<cardpool.length;i++){
                cur_peng = cardpool[i];
                card_type = card_type.concat(cur_peng['tab']);
                if(pre_peng != null){
                    if(cur_peng['tab']==pre_peng['tab']&&cur_peng['num']==pre_peng['num']){
                        count += 1;
                        if(count == 1){
                            if(cur_peng['tab']=='tong'){
                                peng_count['tong_peng'] += 1;
                            }
                            else if(cur_peng['tab']=='tiao'){
                                peng_count['tiao_peng'] += 1;
                            }
                            else if(cur_peng['tab'] =='wan'){
                                peng_count['wan_peng'] += 1;
                            }
                            else if(cur_peng['tab'] =='feng'){
                                peng_count['feng_peng'] += 1;
                            }
                            else{
                                peng_count['yuan_peng'] += 1;
                            }
                        }

     
                    }
                    else{
                        pre_peng = null;
                        count = 0;
                    }
                }
                else{
                    pre_peng = cur_peng;
                }
            }
            this.setData({
                peng_selected:this.data.url,
                cardpool_peng:this.data.cardpool,
                cardpool:arr,
                peng_count:peng_count,
                peng_sum:peng_count['tong_peng'] + peng_count['tiao_peng'] + peng_count['wan_peng'] + peng_count['feng_peng'] + peng_count['yuan_peng'],
                card_type:card_type
            })
            console.log(this.data.peng_count,this.data.peng_sum,card_type)
        }
        else if(name == '杠'){
            let cur_gang = null;
            let pre_gang = null;
            let gang_count = {tong_gang:0,tiao_gang:0,wan_gang:0,feng_gang:0,yuan_gang:0};

            let count = 0;

            for(let i=0;i<cardpool.length;i++){
                cur_gang = cardpool[i];
                card_type = card_type.concat(cur_gang['tab']);
                if(pre_gang != null){
                    if(cur_gang['tab']==pre_gang['tab']&&cur_gang['num']==pre_gang['num']){
                        count += 1;
                        if(count == 2){
                            if(cur_gang['tab']=='tong'){
                                gang_count['tong_gang'] += 1;
                            }
                            else if(cur_gang['tab']=='tiao'){
                                gang_count['tiao_gang'] += 1;
                            }
                            else if(cur_gang['tab'] =='wan'){
                                gang_count['wan_gang'] += 1;
                            }
                            else if(cur_gang['tab'] =='feng'){
                                gang_count['feng_gang'] += 1;
                            }
                            else{
                                gang_count['yuan_gang'] += 1;
                            }
                        }

     
                    }
                    else{
                        pre_gang = null;
                        count = 0;
                    }
                }
                else{
                    pre_gang = cur_gang;
                }
            }
            this.setData({
                gang_selected:this.data.url,
                cardpool_gang:this.data.cardpool,
                cardpool:arr,
                gang_count:gang_count,
                gang_sum:gang_count['tong_gang'] + gang_count['tiao_gang'] + gang_count['wan_gang'] + gang_count['feng_gang'] + gang_count['yuan_gang'],
                card_type:card_type
            })
            console.log(this.data.gang_count,this.data.gang_sum,card_type)
        }
        else{
            let cur_shun = null;
            let pre_shun = null;
            let shun_count = {tong_shun:0,tiao_shun:0,wan_shun:0,feng_shun:0,yuan_shun:0};

            let count = 0;

            for(let i=0;i<cardpool.length;i++){
                cur_shun = cardpool[i];
                card_type = card_type.concat(cur_shun['tab']);
                if(pre_shun != null){
                    if(cur_shun['tab']==pre_shun['tab']&&cur_shun['num']==pre_shun['num']+1){
                        count += 1;
                        if(count == 1){
                            if(cur_shun['tab']=='tong'){
                                shun_count['tong_shun'] += 1;
                            }
                            else if(cur_shun['tab']=='tiao'){
                                shun_count['tiao_shun'] += 1;
                            }
                            else if(cur_shun['tab'] =='wan'){
                                shun_count['wan_shun'] += 1;
                            }
                            else if(cur_shun['tab'] =='feng'){
                                shun_count['feng_shun'] += 1;
                            }
                            else{
                                shun_count['yuan_shun'] += 1;
                            }
                        }

     
                    }
                    else{
                        pre_shun = null;
                        count = 0;
                    }
                }
                else{
                    pre_shun = cur_shun;
                }
            }
            this.setData({
                shun_selected:this.data.url,
                cardpool_shun:this.data.cardpool,
                cardpool:arr,
                shun_count:shun_count,
                shun_sum:shun_count['tong_shun'] + shun_count['tiao_shun'] + shun_count['wan_shun'] + shun_count['feng_shun'] + shun_count['yuan_shun'],
                card_type:card_type
            })
            console.log(this.data.shun_count,this.data.shun_sum,card_type)
        }
        this.setData({
            keyboard_display:true,
            url:arr
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

    
        var arr1 = [];
        arr1[0]={tab:cardtab,num:cardnum};

        this.data.cardpool = this.data.cardpool.concat(arr1);

        this.setData({
            url:this.data.url,
            cardpool:this.data.cardpool
        })
    },
    card_del:function(){
        if (this.data.url.length != 0) {
            this.data.url.splice(this.data.url.length - 1, 1);
            this.data.cardpool.splice(this.data.cardpool.length - 1, 1);
            this.setData({
                url:this.data.url,
                cardpool:this.data.cardpool
            })          
          }
    },
    reset:function(){
        this.setData({
            dui_list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            peng_list:[1,2,3,4,5,6,7,8,9,10,11,12],
            gang_list:[1,2,3,4,5,6,7,8,9,10,11,12],
            shun_list:[1,2,3,4,5,6,7,8,9,10,11,12],
            tong_list:[1,2,3,4,5,6,7,8,9],
            tiao_list:[1,2,3,4,5,6,7,8,9],
            wan_list:[1,2,3,4,5,6,7,8,9],
            feng_list:[1,2,3,4],
            yuan_list:[1,2,3],
            keyboard_display:true,
            keyboard_list:[],
            player_name:"",
            tab:[],
            num:[],
            url:[],
            dui_selected:[],
            peng_selected:[],
            gang_selected:[],
            shun_selected:[],
            cardpool:[],
            dui_count:{},
            dui_sum:0,
            peng_count:{},
            peng_sum:0,
            gang_count:{},
            gang_sum:0,
            shun_count:{},
            shun_sum:0
        })
    },
    settlement:function () {
        let card_type = this.data.card_type;
        card_type = Array.from(new Set(card_type));
        if(this.data.dui_sum*2+this.data.peng_sum*3+this.data.gang_sum*4+this.data.shun_sum*3 == 14 + this.data.gang_sum){
          for(let i = 0;i<card_type.length;i++){
              if(card_type == 'tong' || 'tiao')
          }

            console.log('胡牌',card_type)
        }
        else{
            console.log('没胡牌')
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