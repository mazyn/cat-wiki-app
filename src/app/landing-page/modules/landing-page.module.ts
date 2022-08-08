import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from '../components/landing-page.component';
import { LandingPageService } from '../services/landing-page.service';
import { LandingPageHeroComponent } from '../components/landing-page-hero/landing-page-hero.component';

@NgModule({
  declarations: [LandingPageComponent, LandingPageHeroComponent],
  imports: [CommonModule, LandingPageRoutingModule],
  providers: [LandingPageService],
})
export class LandingPageModule {}
