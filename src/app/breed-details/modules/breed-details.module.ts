import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedDetailsPageRoutingModule } from './breed-details-routing.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { SharedServicesModule } from 'src/app/shared/services/shared-services.module';
import { BreedDetailsPageComponent } from '../pages/breed-details-page.component';
import { BreedDetailsStatsIndicatorComponent } from '../components';

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
