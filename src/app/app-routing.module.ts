import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing-page/modules/landing-page.module').then(
        (m) => m.LandingPageModule,
      ),
  },
  {
    path: 'most-searched',
    loadChildren: () =>
      import('./most-searched-page/modules/most-searched-page.module').then(
        (m) => m.MostSearchedPageModule,
      ),
  },
  {
    path: 'breed/:id',
    loadChildren: () =>
      import('./breed-details/modules/breed-details.module').then(
        (m) => m.BreedDetailsModule,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
