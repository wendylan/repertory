// pages/brands/brands.js


var wxCharts = require('../../utils/wxcharts.js');
Page({
    data: {
        items: [
            { name: 'CKRZ', value: '广钢' },
            { name: 'ck_HPLG', value: '韶钢', checked: 'true' },
            { name: 'NS', value: '粤钢' },
            { name: 'YZ', value: '湘钢' },
            { name: 'YZ', value: '裕丰' },
            { name: 'YZ', value: '冷钢' },
            { name: 'YZ', value: '本钢' },
            { name: 'YZ', value: '马钢' },
            { name: 'YZ', value: '华美' },
            { name: 'YZ', value: '涟钢' }
        ],
        isOpen: false,
        isTable: true,
        cateType: [
            { name: '螺纹钢', value: '螺纹钢' },
            { name: '盘螺', value: '盘螺', checked: 'true' },
            { name: '高线', value: '高线' },
        ],
    },

    // 趋势图的展示
    getChartData() {
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
            height: 300
        });
    },
    // 打开表格
    openTable() {
        let isTable = this.data.isTable;
        this.setData({
            isTable: true
        });
    },
    // 打开趋势图
    openImg() {
        let isTable = this.data.isTable;
        this.setData({
            isTable: false
        });
        if (isTable) {
            this.getChartData();
        }
    },
    // 打开筛选框
    openFilter() {
        let isOpen = this.data.isOpen;
        this.setData({
            isOpen: !isOpen
        });
    },

    // 品名单选框
    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    },

    // 品牌复选框
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    },
    // 确定
    confirmSelect() {
        console.log('confirm');
        this.openFilter();
    },

    // 重置
    resetSelect() {
        console.log('reset');
        this.openFilter();
    },

    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        this.getChartData();
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
        this.getChartData();
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    }
})
