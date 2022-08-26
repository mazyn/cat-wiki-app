import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { SharedServicesModule } from 'src/app/shared/services/shared-services.module';
import { BreedDetailsPageRoutingModule } from './breed-details-routing.module';
import { BreedDetailsPageComponent } from '../pages/breed-details-page.component';
import { BreedDetailsStatsIndicatorComponent } from '../components';

@NgModule({
  imports: [
    CommonModule,
    BreedDetailsPageRoutingModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    SharedServicesModule,
    SwiperModule,
  ],
  declarations: [
    BreedDetailsPageComponent,
    BreedDetailsStatsIndicatorComponent,
  ],
})
export class BreedDetailsPageModule {}
