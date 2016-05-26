import './BarChart.scss'
import React, { Component } from 'react'
import echarts from 'echarts'

export default class BarChart extends Component{
	componentDidMount() {
      	let myChart = echarts.init(document.getElementById('bc-container'))

		let option = {
		    title: {
		        text: '折线图堆叠'
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    textStyle:{
		    	fontSize: 36
		    },
		    grid: {
		        left: '5%',
		        right: '-15%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['周一','周二','周三','周四','周五','周六','周日'],
		        textStyle:{
			    	fontSize: 36
			    },
		    },
		    yAxis: {
		        type: 'value',
		        position: 'right'
		    },
		    series: [
		        {
		            name:'邮件营销',
		            type:'line1',
		            stack: '总量',
		            data:[120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name:'联盟广告',
		            type:'line2',
		            stack: '总量',
		            data:[220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name:'视频广告',
		            type:'line',
		            stack: '总量',
		            data:[150, 232, 201, 154, 190, 330, 410]
		        },
		        {
		            name:'直接访问',
		            type:'line',
		            stack: '总量',
		            data:[320, 332, 301, 334, 390, 330, 320]
		        },
		        {
		            name:'搜索引擎',
		            type:'line',
		            stack: '总量',
		            data:[820, 932, 901, 934, 1290, 1330, 1320]
		        }
		    ]
		}

		myChart.setOption(option)
	}
	render(){
		return(
			<div>
				<div className='bc-container' id='bc-container'>
				</div>
			</div>
		)
	}
}

