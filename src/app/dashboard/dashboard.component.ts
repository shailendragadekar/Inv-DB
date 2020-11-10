import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts/highstock";
import { Options } from "highcharts/highstock";
import { DBDataService } from "./dbdata.service";
import moment from "moment";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  constructor(private DBdata: DBDataService) {}

  ngOnInit() {
    this.DBdata.setData();
    let chartData = this.DBdata.getData();
    let chartArr: any = [];
    chartData.chart.forEach((arr: any) => {
      chartArr.push({
        x: moment(arr.EFFECTIVE_DATE, "DD-MMM-YYYY").valueOf(),
        y: parseFloat(arr.AUM)
      });
    });
    this.chartOptions = {
      chart: {
        style: {
          fontFamily: "Montserrat"
        }
      },
      rangeSelector: {
        inputEnabled: false
      },
      navigator: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
          var point = this;
          return `<div>` + moment(point.x).format("DD-MMM-YYYY") + `</div><div> Portfolio Value : `+point.y+`</div>`;
        }
      },
      series: [
        {
          name: "Portfolio Value",
          type: "area",
          data: chartArr,
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [
                1,
                Highcharts.color(Highcharts.getOptions().colors[0])
                  .setOpacity(0)
                  .get("rgba")
              ]
            ]
          }
        }
      ]
    };
  }
}
