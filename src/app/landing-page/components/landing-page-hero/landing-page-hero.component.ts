import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgSelectComponent } from '@ng-select/ng-select';

import { CatApiBreed } from 'src/app/shared/models';
import { CatApiService } from 'src/app/shared/services';

@Component({
  selector: 'app-landing-page-hero',
  templateUrl: './landing-page-hero.component.html',
})
export class LandingPageHeroComponent implements OnInit {
  @ViewChild('ngSelect') ngSelect: NgSelectComponent | undefined;

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

  toggleSearchDialog(e?: Event): void {
    e?.preventDefault();
    console.log('toggleSearchDialog');

    this.showSearchDialog = !this.showSearchDialog;
    if (this.showSearchDialog) this.ngSelect?.focus();
  }

  handleSelectedBreed(): void {
    if (!this.selectedBreed) return;
    this.catApiService.increaseBreedSearchCount(this.selectedBreed);
    this.router.navigateByUrl(`/breed/${this.selectedBreed}`).then(() => {});
  }
}
