import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MostSearchedPageComponent } from '../pages/most-searched-page.component';

const routes: Routes = [
  {
    path: '',
    component: MostSearchedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostSearchedPageRoutingModule {}
