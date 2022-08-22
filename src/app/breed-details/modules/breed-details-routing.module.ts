import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreedDetailsPageComponent } from '../pages/breed-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: BreedDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedDetailsPageRoutingModule {}
