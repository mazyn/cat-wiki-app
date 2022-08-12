import { Component, OnInit } from '@angular/core';

import { Breed } from 'src/app/shared/models';
import { CatApiService } from 'src/app/shared/services';

@Component({
  selector: 'app-landing-page-most-searched',
  templateUrl: './landing-page-most-searched.component.html',
  styleUrls: ['./landing-page-most-searched.component.scss'],
})
export class LandingPageMostSearchedComponent implements OnInit {
  breeds: Breed[] = [];

  constructor(private readonly catApiService: CatApiService) {}

  ngOnInit(): void {
    this.catApiService.getMostSearchedBreeds().subscribe((breeds) => {
      this.breeds = breeds.slice(0, 4);
    });
  }
}
