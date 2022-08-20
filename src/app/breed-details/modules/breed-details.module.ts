import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedDetailsRoutingModule } from './breed-details-routing.module';
import { BreedDetailsComponent } from '../components/breed-details.component';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { SharedServicesModule } from 'src/app/shared/services/shared-services.module';
import { StatsIndicatorComponent } from '../components/stats-indicator/stats-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    BreedDetailsRoutingModule,
    SharedDirectivesModule,
    SharedServicesModule,
  ],
  declarations: [BreedDetailsComponent, StatsIndicatorComponent],
})
export class BreedDetailsModule {}
