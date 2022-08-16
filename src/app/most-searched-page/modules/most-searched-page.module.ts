import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostSearchedPageRoutingModule } from './most-searched-page-routing.module';
import { MostSearchedPageComponent } from '../components/most-searched-page.component';

@NgModule({
  imports: [CommonModule, MostSearchedPageRoutingModule],
  declarations: [MostSearchedPageComponent],
})
export class MostSearchedPageModule {}
