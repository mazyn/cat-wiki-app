import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';

import { CatApiBreedPhoto } from 'src/app/shared/models';
import { CatApiService } from 'src/app/shared/services';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details-page.component.html',
})
export class BreedDetailsPageComponent implements OnInit {
  breed: CatApiBreedPhoto | undefined;
  isLoading: boolean = false;
  segmentedIndicators: { name: string; acessor: string }[] = [
    { name: 'Adaptability', acessor: 'adaptability' },
    { name: 'Affection Level', acessor: 'affectionLevel' },
    { name: 'Child friendly', acessor: 'childFriendly' },
    { name: 'Grooming', acessor: 'grooming' },
    { name: 'Intelligence', acessor: 'intelligence' },
    { name: 'Health issues', acessor: 'healthIssues' },
    { name: 'Social needs', acessor: 'socialNeeds' },
    { name: 'Stranger friendly', acessor: 'strangerFriendly' },
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly catApiService: CatApiService,
    private readonly toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.route.paramMap.pipe(take(1)).subscribe((map) => {
      const breedId = map.get('id');

      if (!breedId) {
        this.isLoading = false;
        this.toastr.error('Breed ID not provided');
        return;
      }

      this.catApiService.getBreedPhotos(breedId, 9).subscribe({
        next: (b) => (this.breed = b),
        complete: () => (this.isLoading = false),
      });
    });
  }

  getBreedPhoto(): string {
    if (this.breed?.photos && this.breed?.photos.length <= 0) return '';

    return this.breed?.photos[0] as string;
  }

  getSimpleDetailList() {
    return [
      ['Temperament:', this.breed?.temperament],
      ['Origin:', this.breed?.origin],
      ['Life Span:', `${this.breed?.lifeSpan} years`],
    ]
      .map(
        ([title, content]) =>
          `<li class="mb-3 sm:mb-6">
            <span class="font-bold mr-1">${title}</span>
            <span>${content}</span>
          </li>`,
      )
      .join('');
  }

  getSegmentCurrentValue(acessor: string): number {
    if (!this.breed) return 0;

    const b = this.breed as { [key: string]: any };

    return Number.parseInt(b[acessor]);
  }
}
