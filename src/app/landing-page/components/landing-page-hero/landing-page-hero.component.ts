import { Component, OnInit } from '@angular/core';
import { CatApiBreed } from 'src/app/shared/models';

import { CatApiService } from 'src/app/shared/services';

@Component({
  selector: 'app-landing-page-hero',
  templateUrl: './landing-page-hero.component.html',
})
export class LandingPageHeroComponent implements OnInit {
  breeds: CatApiBreed[] = [];
  selectedBreed: string | undefined;
  isLoading: boolean = false;
  showSearchDialog: boolean = true;

  constructor(private readonly catApiService: CatApiService) {}

  ngOnInit(): void {
    this.getAllBreeds();
  }

  getAllBreeds(): void {
    this.isLoading = true;
    this.catApiService.getAllBreeds().subscribe({
      next: (breeds) => (this.breeds = breeds),
      complete: () => (this.isLoading = false),
    });
  }

  toggleSearchDialog(): void {
    console.log('toggle!');

    this.showSearchDialog = !this.showSearchDialog;
  }
}
