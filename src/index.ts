import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerChartService } from './powerChart.service';
import { PowerChart } from './models/PowerChart';
import { PowerZoneDefinition } from './models/PowerZoneDefinition';
import { PowerZone } from './models/PowerZone';
import { Rider } from './models/Rider';
import { Utilities } from './Utilities';

export * from './powerChart.service';
export * from './models/PowerChart';
export * from './models/Rider';
export * from './models/PowerZone';
export * from './models/PowerZoneDefinition';
export * from './Utilities';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    PowerChart,
    PowerZoneDefinition,
    PowerZone,
    Rider,
    Utilities
  ]
})
export class PowerChartsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PowerChartsModule,
      providers: [PowerChartService]
    };
  }
}
