import React from "react";
import "./Progress.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Progress() {
  // chart start
  const options = {
    
      colors: ['#FFD700'],
      chart: {
          type: 'column',
          inverted: true,
          polar: true
      },
      title: {
          text: 'Winter Olympic medals per existing country (TOP 5)'
      },
      tooltip: {
          outside: true
      },
      pane: {
          size: '85%',
          innerSize: '20%',
          endAngle: 270
      },
      xAxis: {
          tickInterval: 1,
          labels: {
              align: 'right',
              useHTML: true,
              allowOverlap: true,
              step: 1,
              y: 3,
              style: {
                  fontSize: '13px'
              }
          },
          lineWidth: 0,
          categories: [
              'Norway <span class="f16"><span id="flag" class="flag no">' +
              // '</span></span>',
              // 'United States <span class="f16"><span id="flag" class="flag us">' +
              // '</span></span>',
              // 'Germany <span class="f16"><span id="flag" class="flag de">' +
              // '</span></span>',
              // 'Canada <span class="f16"><span id="flag" class="flag ca">' +
              // '</span></span>',
              // 'Austria <span class="f16"><span id="flag" class="flag at">' +
              '</span></span>'
          ]
      },
      yAxis: {
          crosshair: {
              enabled: true,
              color: '#333'
          },
          lineWidth: 0,
          tickInterval: 25,
          reversedStacks: false,
          endOnTick: true,
          showLastLabel: true
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              borderWidth: 0,
              pointPadding: 0,
              groupPadding: 0.15
          }
      },
      series: [{
          name: 'Gold medals',
          data: [132, 105, 92, 73, 64]
      }]
  
  }
  

  return (
    <>
    
      <div className="col-lg-3 col-md-3 d-flex align-items-stretch col-sm-12 col-xs-12">
        <div class="card progressCard">
          <div class="card-body">
            <h6 class="card-title"> </h6>
            <div class="card-text">
            <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
