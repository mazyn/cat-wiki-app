import { Component, OnInit } from '@angular/core';

import { Breed } from 'src/app/shared/models';
import { CatApiService } from 'src/app/shared/services';

@Component({
  selector: 'app-landing-page-most-searched',
  templateUrl: './landing-page-most-searched.component.html',
})
export class LandingPageMostSearchedComponent implements OnInit {
  breeds: Breed[] = [];
  isLoading: boolean = false;

  constructor(private readonly catApiService: CatApiService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.catApiService.getMostSearchedBreeds().subscribe({
      next: (breeds) => {
        this.breeds = breeds.slice(0, 4);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
