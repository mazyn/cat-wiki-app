import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { DialogComponent } from './dialog/dialog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RectangleSkeletonComponent } from './skeletons/rectangle-skeleton.component';
import { SubheadingComponent } from './subheading/subheading.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ContainerComponent,
    DialogComponent,
    FooterComponent,
    HeaderComponent,
    RectangleSkeletonComponent,
    SubheadingComponent,
    TitleComponent,
  ],
  exports: [
    ContainerComponent,
    DialogComponent,
    FooterComponent,
    HeaderComponent,
    RectangleSkeletonComponent,
    SubheadingComponent,
    TitleComponent,
  ],
})
export class SharedComponentsModule {}
