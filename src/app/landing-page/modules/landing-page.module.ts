import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import {
  LandingPageHeroComponent,
  LandingPageMostSearchedComponent,
} from '../components';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedServicesModule } from 'src/app/shared/services/shared-services.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { LandingPageComponent } from '../pages/landing-page.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    LandingPageComponent,
    LandingPageHeroComponent,
    LandingPageMostSearchedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LandingPageRoutingModule,
    NgSelectModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    SharedServicesModule,
  ],
})
export class LandingPageModule {}
