import { Component } from "react";
import Chart from "react-google-charts";

import "./chart.css"
import BasicTable from "./table"

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update:true,
      series1: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
      
    };
  }

  componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({
  //       ...this.state,
  //       update:true,
  //     })  
  // }, 10000);
  }

  render() {
      // let data=[]
      // let combo=[]
      // let cnt=10
      // let cnt1=100
      // for (let i = 0; i < 10; i++) {
      //   cnt = cnt +=1
      //   cnt1 = cnt1 +=50
      //   data.push([cnt , cnt1])
      //   combo.push([cnt,cnt1,Math.floor(Math.random() * (1000 - 500 + 1) + 500),Math.floor(Math.random() * (1000 - 500 + 1) + 500)])

      // }

      let combo= [["Comfort Inn Airport",148,104,119],
      ["Courtyard by Marriott Memphis Airport",174,159,166.55],
      ["Crowne Plaza Memphis East",111,105,107.5],
      ["Fairfield Inn & Suites Memphis I-240 & Perkins",119,94,105.25],
      ["Holiday Inn Memphis Airport - Conference Center",null,null,null],
      ["Quality Suites I-240 East-Airport",124,87,98.76]]


    let combo1 =[[
      'Day',
      'Courtyard by Marriott Memphis Airport',
      'Crowne Plaza Memphis East',
      {label: 'Holiday Inn Memphis Airport - Conference Center', type: 'number'},
      'Comfort Inn Airport',
      'Fairfield Inn & Suites',
      'Quality Suites',
    ],
    ["Aug 11, 2021", null, 104, null,104,94,87],
    ["Aug 12, 2021", 159, 104, null, 104,94,87],
    ["Aug 13, 2021", 144, 111, null, 123,129,119],
    ["Aug 14, 2021", 169, 111, null, 123,199,113],
    ["Aug 15, 2021", 139, 104, null, 104,80,78],
    ["Aug 16, 2021", 129, 104, 114, 104,80,78],
    ["Aug 17, 2021", 144, 104, 114, 104,80,78],
    ["Aug 18, 2021", 125, 104, 103, 97,80,78],
    ["Aug 19, 2021", 107, 104, 103, 98,80,78],
    ["Aug 20, 2021", 134, 111, 125, 152,null,113],
    ["Aug 21, 2021", 134, 111, 125, 161,null,113],
    ["Aug 22, 2021", 125, 104, 98, 104,80,78],
    ["Aug 23, 2021", 121, 104, 103,98,80,78],
    ["Aug 24, 2021", 125, 104, 103,100,80,78],
    ["Aug 25, 2021", 125, 104, 97,94,80,74],
    ["Aug 26, 2021", 121, 104, 97,97,80,74],
    ["Aug 27, 2021", 139, 111, 127,152,93,101],
    ["Aug 28, 2021", 134, 111, 127,152,119,101],
    ["Aug 29, 2021", 125, 104, 93,98,80,74],
    ["Aug 30, 2021", 121, 104, 97,91,80,74],
    ["Aug 31, 2021", 121, 104, 97,91,80,74],
    ["Sep 1, 2021", 125, 104, 93,89,80,74],
    ["Sep 2, 2021", 130, 104, 93,98,80,74],
    ["Sep 3, 2021", 139, 111, 105,152,93,110],
    ["Sep 4, 2021", 139, 111, 105,143,119,110],
    ["Sep 5, 2021", 125, 111, 93,132,80,74],
    ["Sep 6, 2021", 121, 111, 93,91,80,74],
    ["Sep 7, 2021", 134, 118, 93,98,80,74],
    ["Sep 8, 2021", 134, 118, 93,98,80,74],
    ["Sep 9, 2021", 152, 118, 118,98,80,74],
    
    ]
    let combo2 =[[
      'Day',
      'Fairfield Inn & Suites Memphis I-240 & Perkins',
      'Comfort Inn Airport',
      {label: 'Courtyard by Marriott Memph', type: 'number'},
      'Holiday Inn Memphis Airport - Co',
      'Quality Suites',
      'Crowne Plaza Memphis East',
    ],
    ["Aug 11, 2021", 119, null, null,null,124,111],
    ["Aug 12, 2021", 119, 148, 174, null,124,111],
    ["Aug 13, 2021", 144, 111, null, 123,129,119],
    ["Aug 14, 2021", 169, 111, null, 123,199,113],
    ["Aug 15, 2021", 139, 104, null, 104,80,78],
    ["Aug 16, 2021", 129, 104, 114, 104,80,78],
    ["Aug 17, 2021", 144, 104, 114, 104,80,78],
    ["Aug 18, 2021", 125, 104, 103, 97,80,78],
    ["Aug 19, 2021", 107, 104, 103, 98,80,78],
    ["Aug 20, 2021", 134, 111, 125, 152,null,113],
    ["Aug 21, 2021", 134, 111, 125, 161,null,113],
    ["Aug 22, 2021", 125, 104, 98, 104,80,78],
    ["Aug 23, 2021", 121, 104, 103,98,80,78],
    ["Aug 24, 2021", 125, 104, 103,100,80,78],
    ["Aug 25, 2021", 125, 104, 97,94,80,74],
    ["Aug 26, 2021", 121, 104, 97,97,80,74],
    ["Aug 27, 2021", 139, 111, 127,152,93,101],
    ["Aug 28, 2021", 134, 111, 127,152,119,101],
    ["Aug 29, 2021", 125, 104, 93,98,80,74],
    ["Aug 30, 2021", 121, 104, 97,91,80,74],
    ["Aug 31, 2021", 121, 104, 97,91,80,74],
    ["Sep 1, 2021", 125, 104, 93,89,80,74],
    ["Sep 2, 2021", 130, 104, 93,98,80,74],
    ["Sep 3, 2021", 139, 111, 105,152,93,110],
    ["Sep 4, 2021", 139, 111, 105,143,119,110],
    ["Sep 5, 2021", 125, 111, 93,132,80,74],
    ["Sep 6, 2021", 121, 111, 93,91,80,74],
    ["Sep 7, 2021", 134, 118, 93,98,80,74],
    ["Sep 8, 2021", 134, 118, 93,98,80,74],
    ["Sep 9, 2021", 152, 118, 118,98,80,74],
    
    ]

    return (
      <div>
          {this.state.update ? 
         
          <div className="row">
            <div className="col">
              <Chart
                // width={'500px'}
                height={'400px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["hotel","Max Rate","Min Rate","Average Rate"],
                  ...combo
                  
                ]}
                options={{
                  
                  // title: 'Monthly Coffee Production by Country',
                  legend: { position: 'top', alignment: 'start' },
                  // vAxis: { title: 'Cups' },
                  hAxis: {slantedText: true },
                  vAxis: {
                ticks: [0,80, 100,200] },
                  // hAxis: { slantedText: true, gridlines: { count: 100 }, showTextEvery: "Discrete","maxValue":10 },
                  seriesType: 'line',
                  series: { 1: { type: 'bars' } },
                  colors: [  '#4596F1','#0CF5ED', '#F10096'],
                  tooltip: {isHtml: true},
                  focusTarget: 'category',
                  curveType:'function',
                  // pointSize: 5,
          interpolateNulls: false,  
          crosshair: {orientation: 'vertical', trigger: 'focus'},
                }}
                rootProps={{ 'data-testid': '3' }}
                
              />
            </div>
            <div className="col">
              <Chart
                // width={'500px'}
                height={'500px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  
                  ...combo1
                  
                ]}
                options={{
                  
                  // title: 'Monthly Coffee Production by Country',
                  legend: { position: 'top', alignment: 'start',maxLines: 2,
                  textStyle: {
                    fontSize: 15
                  } },
                 
                  hAxis: {title: 'Ratedate' },
                  vAxis: {
                    title: 'Min Rate',
                ticks: [0,80,100,200],
                minValue: 0
                
              },
              // explorer: {
              //   axis: 'horizontal',
              //   keepInBounds: true,
              //   maxZoomIn: 4.0,
              //   actions: ['dragToZoom', 'rightClickToReset'],
              // },
              crosshair: {orientation: 'vertical', trigger: 'focus'},
                  
                  colors: [  '#0072F0','#00B6CB', '#F10096','#F10096','#FCBB3D','#9AC36E'],
                  tooltip: {isHtml: true},
                  focusTarget: 'category',
                  curveType:'function',
                  // pointSize: 5,
          interpolateNulls: false,
          
                  
                }}
                rootProps={{ 'data-testid': '6' }}
                
              />
            </div>
           
            <div className="col">
              <Chart
                // width={'500px'}
                height={'500px'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={[
                  
                  ...combo2
                  
                ]}
                options={{
                  
                  // title: 'Monthly Coffee Production by Country',
                  legend: { position: 'top', alignment: 'start',maxLines: 2,
                  textStyle: {
                    fontSize: 15
                  } },
                 
                  hAxis: {title: 'Ratedate' },
                  vAxis: {
                    title: 'Min Rate',
                ticks: [0,80,100,200],
                minValue: 0
                
              },
              // explorer: {
              //   axis: 'horizontal',
              //   keepInBounds: true,
              //   maxZoomIn: 4.0,
              //   actions: ['dragToZoom', 'rightClickToReset'],
              // },
              crosshair: {orientation: 'vertical', trigger: 'focus'},
                  
                  colors: [  '#0072F0','#00B6CB', '#F10096','#F10096','#FCBB3D','#9AC36E'],
                  tooltip: {isHtml: true},
                  focusTarget: 'category',
                  curveType:'function',
                  // pointSize: 5,
          interpolateNulls: false,
          
                  
                }}
                rootProps={{ 'data-testid': '6' }}
                
              />
            </div>
          </div>
        : "" }
        {/* <div className="col">
          <BasicTable/>
        </div> */}
        {/* <div className="col" >
        <Chart
          width={'600px'}
          height={'300px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['Year', 'null'],
            ['Comfort Inn Airport', "100%"],
            ['Courtyard by Marriott Memphis Airport', "100%"],
            ['Crowne Plaza Memphis East', "100%"],
            ['Fairfield Inn & Suites Memphis I-240 & Perkins', "100%"],
          ]}
          options={{
            // Material design options
            
            legend: { position: 'top', alignment: 'end',
                          textStyle: {
                            fontSize: 15
                          } 
                        },
                        
                      //     hAxis: {title: 'Ratedate' },
                          vAxis: {
                            // title: 'Min Rate',
                        // ticks: [0%,80,100,200],
                        minValue: 0,
                       
                        
                        
                      },
                      // explorer: {
                      //   axis: 'horizontal',
                      //   keepInBounds: true,
                      //   maxZoomIn: 4.0,
                      //   actions: ['dragToZoom', 'rightClickToReset'],
                      // },
                      // crosshair: {orientation: 'vertical', trigger: 'focus'},
                          
                          colors: [  '#FFA800'],
                          tooltip: {isHtml: true,trigger: "visible"},
                          focusTarget: 'category',
                          // curveType:'function',
                          // pointSize: 5,
                          
                  interpolateNulls: false,
          }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
          />
        </div> */}
      </div>
    );
  }
}

export default Charts;
