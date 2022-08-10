import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { SubheadingComponent } from './subheading/subheading.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ContainerComponent,
    HeaderComponent,
    SubheadingComponent,
    TitleComponent,
  ],
  exports: [
    ContainerComponent,
    HeaderComponent,
    SubheadingComponent,
    TitleComponent,
  ],
})
export class SharedComponentsModule {}
