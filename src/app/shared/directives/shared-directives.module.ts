import { NgModule } from '@angular/core';

import { SkeletonDirective } from './skeleton/skeleton.directive';

@NgModule({
  declarations: [SkeletonDirective],
  exports: [SkeletonDirective],
})
export class SharedDirectivesModule {}
