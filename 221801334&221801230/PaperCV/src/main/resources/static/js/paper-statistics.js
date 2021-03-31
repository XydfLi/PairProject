create1();
create2();

function create1() {
    option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['country', 'CVPR', 'ICCV', 'ECCV'],
                ['中国', 230, 220, 190],
                ['日本', 70, 100, 60],
                ['新加坡', 150, 90, 55],
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {},

        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
        ]
    };
    echartBar = echarts.init(document.getElementById("table1"));
    echartBar.setOption(option);
}

function create2(){
    option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['university', 'CVPR', 'ICCV', 'ECCV'],
                ['福州大学', 100, 80, 91],
                ['厦门大学', 90, 101, 87],
                ['中山大学', 93, 87, 103],
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {},

        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
        ]
    };
    echartBar = echarts.init(document.getElementById("table2"));
    echartBar.setOption(option);
}