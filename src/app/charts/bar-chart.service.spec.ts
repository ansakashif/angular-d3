import { TestBed, inject } from '@angular/core/testing';

import { BarChartService } from './bar-chart.service';

describe('BarChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarChartService]
    });
  });

  it('should ...', inject([BarChartService], (service: BarChartService) => {
    expect(service).toBeTruthy();
  }));
});
