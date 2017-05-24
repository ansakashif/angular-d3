import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Input } from '@angular/core';
import * as d3 from 'd3';
import { LineChartService } from '../line-chart.service'
import { IDataType } from './line-chart.model'


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LineChartComponent implements OnInit {

  @ViewChild('lineChart') private container: ElementRef; 
  @Input() private lineData: Array<any>

  private vis: any;
  private margins: any;
  private width: number;
  private height: number;
  private xRange: any;
  private yRange: any;
  private xAxis: any;
  private yAxis: any;
  private lineChart: any;

  constructor(private lineChartService:LineChartService) { }

  ngOnInit() {
    this.lineData = this.lineChartService.getData();
    this.createLineChart();
  }

  createLineChart() {
    debugger;
    let element = this.container.nativeElement;
    this.vis = d3.select(element).append('svg').attr('width', '1000').attr('height', '500');
      this.width = 1000,
      this.height = 500,
      this.margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
      },
      this.xRange = d3.scaleLinear().range([this.margins.left, this.width - this.margins.right]).domain([d3.min(this.lineData, function (d) {
        return d.x;
      }),
      d3.max(this.lineData, function (d) {
        return d.x;
      })
      ]),

      this.yRange = d3.scaleLinear().range([this.height - this.margins.top, this.margins.bottom]).domain([d3.min(this.lineData, function (d) {
        return d.y;
      }),
      d3.max(this.lineData, function (d) {
        return d.y;
      })
      ]),

      // this.xAxis = this.vis.axis()
      //   .scale(this.xRange)
      //   .tickSize(5)
      //   .tickSubdivide(true),

      // this.xAxis = d3.scaleLinear().domain(this.lineData.x)

      // this.yAxis = this.vis.axis()
      //   .scale(this.yRange)
      //   .tickSize(5)
      //   .orient("left")
      //   .tickSubdivide(true);


    this.vis.append('g')
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (this.height - this.margins.bottom) + ")")
      .call(d3.axisBottom(this.xRange));

    this.vis.append('g')
      .attr("class", "y axis")
      .attr("transform", "translate(" + (this.margins.left) + ",0)")
      .call(d3.axisLeft(this.yRange));

    
    let lineFunc = d3.line<IDataType>()
      .x((d)=> this.xRange(d.x))
      .y((d)=> this.yRange(d.y))
       //.interpolate('basis');

    this.vis.append('path')
      .attr("d", lineFunc(this.lineData))
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("fill", "none");

  }
}


