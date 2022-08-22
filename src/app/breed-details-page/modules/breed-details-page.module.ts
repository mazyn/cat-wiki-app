import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedDetailsPageRoutingModule } from './breed-details-page-routing.module';
import { BreedDetailsPageComponent } from '../components/breed-details-page.component';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { SharedServicesModule } from 'src/app/shared/services/shared-services.module';
import { BreedDetailsStatsIndicatorComponent } from '../components/breed-details-stats-indicator/breed-details-stats-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    BreedDetailsPageRoutingModule,
    SharedDirectivesModule,
    SharedServicesModule,
  ],
  declarations: [
    BreedDetailsPageComponent,
    BreedDetailsStatsIndicatorComponent,
  ],
})
export class BreedDetailsPageModule {}
