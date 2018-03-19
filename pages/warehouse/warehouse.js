// pages/warehouse/warehouse.js

var wxCharts = require('../../utils/wxcharts.js');
Page({
    data: {
        screenWidth: null,
        items: [
            { name: 'CKRZ', value: '容正仓' },
            { name: 'ck_HPLG', value: '黄埔旧港', checked: 'true' },
            { name: 'NS', value: '广物南沙仓' },
            { name: 'YZ', value: '广物鱼珠仓' }
        ],
        isOpen: false,
        isTable: true,
        cateType: [
            { name: '螺纹钢', value: '螺纹钢' },
            { name: '盘螺', value: '盘螺', checked: 'true' },
            { name: '高线', value: '高线' },
        ],
        repertory: [
            { "warehouse": "鱼珠仓", "thread_num": "564", "snail_num": "15000", "altitude_num": "100000", "total": "115564" },
            { "warehouse": "吉山仓", "thread_num": "564", "snail_num": "15000", "altitude_num": "100000", "total": "115564" },
            { "warehouse": "江村仓", "thread_num": "564", "snail_num": "15000", "altitude_num": "100000", "total": "115564" },
            { "warehouse": "海福仓", "thread_num": "564", "snail_num": "15000", "altitude_num": "100000", "total": "115564" }
        ],
        storage: [
            { "text": "当前库存合计", "thread_num": "564", "snail_num": "15000", "altitude_num": "100000", "total": "115564" },
            { "text": "一周前库存", "thread_num": "564", "snail_num": "15000", "altitude_num": "100000", "total": "115564" },
            { "text": "月初库存", "thread_num": "564", "snail_num": "15000", "altitude_num": "100000", "total": "115564" },
            { "text": "年初库存", "thread_num": "564", "snail_num": "15000", "altitude_num": "100000", "total": "115564" },
            { "text": "去年同期库存", "thread_num": "564", "snail_num": "15000", "altitude_num": "100000", "total": "115564" }
        ]
    },
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    },
    getInitData(){
        wx.request({
            // url: 'http://sug.music.baidu.com/info/suggestion', //仅为示例，并非真实的接口地址
            // url: 'https://www.sojson.com/open/api/weather/json.shtml?city=五华', //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                console.log(res.data)
            }
        })
    },
    // 趋势图的展示
    getChartData(){
        new wxCharts({
            canvasId: 'warehouse-chart',
            type: 'line',
            categories: ['0', '10', '20', '30', '40', '50', '60'],
            series: [{
                name: '库存量',
                data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94, 0.88],
                format: function (val) {
                    return val.toFixed(2) + '万';
                }
            }],
            yAxis: {
                title: '成交金额 (万元)',
                format: function (val) {
                    return val.toFixed(2);
                },
                min: 0
            },
            width: 350,
            height: 200
        });
    },
    // 打开表格
    openTable(){
        let isTable = this.data.isTable;
        this.setData({
            isTable: true
        });
    },
    // 打开趋势图
    openImg(){
        let isTable = this.data.isTable;
        this.setData({
            isTable: false
        });
    },
    // 打开筛选框
    openFilter(){
        let isOpen = this.data.isOpen;
        this.setData({
            isOpen: !isOpen
        });
    },

    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    },

    getScreenWidth: function () {
        console.log(wx.getSystemInfoSync().windowWidth);
        this.setData({
            screenWidth: wx.getSystemInfoSync().windowWidth
        });
    },  

    onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    },
    onReady:function(){
    // 页面渲染完成
        // this.getInitData();
        this.getScreenWidth();
    },
    onShow:function(){
    // 页面显示
        this.getChartData();
    },
    onHide:function(){
    // 页面隐藏
    },
    onUnload:function(){
    // 页面关闭
    }
})
