import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { SubheadingComponent } from './subheading/subheading.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ContainerComponent,
    HeaderComponent,
    SubheadingComponent,
    TitleComponent,
    FooterComponent,
  ],
  exports: [
    ContainerComponent,
    HeaderComponent,
    SubheadingComponent,
    TitleComponent,
    FooterComponent,
  ],
})
export class SharedComponentsModule {}
