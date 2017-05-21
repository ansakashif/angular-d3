import { Injectable } from '@angular/core';

@Injectable()
export class BarChartService {

  constructor() { }
  private chartData: Array<any>
  /**
   * This function can be used to make ajax request for fetching data from an API. 
   */
  getData(): Array<number> {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
    return this.chartData;
  }

}
