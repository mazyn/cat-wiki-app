import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from '../components/landing-page.component';
import { LandingPageService } from '../services/landing-page.service';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, LandingPageRoutingModule],
  providers: [LandingPageService],
})
export class LandingPageModule {}
