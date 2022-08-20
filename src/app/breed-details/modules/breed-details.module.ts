import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedDetailsRoutingModule } from './breed-details-routing.module';
import { BreedDetailsComponent } from '../components/breed-details.component';

@NgModule({
  imports: [CommonModule, BreedDetailsRoutingModule],
  declarations: [BreedDetailsComponent],
})
export class BreedDetailsModule {}
