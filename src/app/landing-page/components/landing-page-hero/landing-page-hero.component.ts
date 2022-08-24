import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  showSearchDialog: boolean = false;

  constructor(
    private readonly catApiService: CatApiService,
    private readonly router: Router,
  ) {}

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

  handleSelectedBreed(): void {
    // TODO: Tag breed as searched before navigating
    this.router.navigateByUrl(`/breed/${this.selectedBreed}`).then(() => {});
  }
}
