import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostSearchedPageRoutingModule } from './most-searched-page-routing.module';
import { MostSearchedPageComponent } from '../pages/most-searched-page.component';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { SharedServicesModule } from 'src/app/shared/services/shared-services.module';

@NgModule({
  imports: [
    CommonModule,
    MostSearchedPageRoutingModule,
    SharedDirectivesModule,
    SharedServicesModule,
  ],
  declarations: [MostSearchedPageComponent],
})
export class MostSearchedPageModule {}
