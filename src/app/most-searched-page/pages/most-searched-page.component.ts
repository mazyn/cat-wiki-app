import { Component, OnInit } from '@angular/core';

import { Breed } from 'src/app/shared/models';
import { CatApiService } from 'src/app/shared/services';

@Component({
  selector: 'app-most-searched-page',
  templateUrl: './most-searched-page.component.html',
})
export class MostSearchedPageComponent implements OnInit {
  mostSearchedBreeds: Breed[] = [];
  isLoading: boolean = false;

  constructor(private readonly catApiService: CatApiService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.catApiService.getMostSearchedBreeds().subscribe({
      next: (breeds) => (this.mostSearchedBreeds = breeds),
      complete: () => (this.isLoading = false),
    });
  }
}
