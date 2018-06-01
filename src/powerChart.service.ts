import { Injectable } from '@angular/core';
import { Rider } from './models/Rider';
import { PowerChart } from './models/PowerChart';
import { AndyCooganPowerZones } from './models/AndyCooganPowerZones';

@Injectable()
export class PowerChartService {

  create(rider: Rider): PowerChart {
    let coogan = new AndyCooganPowerZones();
    let powerChart = new PowerChart(rider, coogan.zones);
      return powerChart;
  }
}
