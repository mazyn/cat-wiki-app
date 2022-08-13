import { Component, OnInit } from '@angular/core';
import { CatApiBreed } from 'src/app/shared/models';

import { CatApiService } from 'src/app/shared/services';

@Component({
  selector: 'app-landing-page-hero',
  templateUrl: './landing-page-hero.component.html',
  styleUrls: ['./landing-page-hero.component.scss'],
})
export class LandingPageHeroComponent implements OnInit {
  breeds: CatApiBreed[] = [];

  constructor(private readonly catApiService: CatApiService) {}

  ngOnInit(): void {
    this.getAllBreeds();
  }

  getAllBreeds(): void {
    this.catApiService
      .getAllBreeds()
      .subscribe((breeds) => (this.breeds = breeds));
  }
}
