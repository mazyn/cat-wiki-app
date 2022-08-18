import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageService } from '../services/landing-page.service';
import {
  LandingPageComponent,
  LandingPageHeroComponent,
  LandingPageMostSearchedComponent,
} from '../components';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedServicesModule } from 'src/app/shared/services/shared-services.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    LandingPageHeroComponent,
    LandingPageMostSearchedComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    SharedServicesModule,
  ],
  providers: [LandingPageService],
})
export class LandingPageModule {}
