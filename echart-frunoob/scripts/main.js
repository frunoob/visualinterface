(function () {
    // 初始化对象实例
    myChart = charts.init(document.querySeletor("right11"));
    // 设置参数
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    };
    
    // 为实例添加参数
    myChart.setOption(option);
})();