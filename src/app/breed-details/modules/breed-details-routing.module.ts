import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreedDetailsComponent } from '../components/breed-details.component';

const routes: Routes = [
  {
    path: '',
    component: BreedDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedDetailsRoutingModule {}
