import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

import { Breed } from 'src/app/shared/models';
import { CatApiService } from 'src/app/shared/services';

@Component({
  selector: 'app-most-searched-page',
  templateUrl: './most-searched-page.component.html',
})
export class MostSearchedPageComponent implements OnInit {
  mostSearchedBreeds: Breed[] = [];
  isLoading: boolean = false;

  constructor(
    private readonly catApiService: CatApiService,
    @Inject(PLATFORM_ID) private readonly platformId: Object,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        disable: window.innerWidth < 1024,
        duration: 1500,
        once: true,
      });
    }

    this.isLoading = true;
    this.catApiService.getMostSearchedBreeds().subscribe({
      next: (breeds) => (this.mostSearchedBreeds = breeds),
      complete: () => (this.isLoading = false),
    });
  }
}
