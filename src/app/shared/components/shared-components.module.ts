import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [ContainerComponent],
  imports: [RouterModule],
  exports: [ContainerComponent],
})
export class SharedComponentsModule {}
