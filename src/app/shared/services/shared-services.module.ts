import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CatApiService } from './cat-api/cat-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CatApiService],
})
export class SharedServicesModule {}
