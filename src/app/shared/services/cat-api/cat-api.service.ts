import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, take } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Breed, CatApiBreed, CatApiBreedPhoto } from '../../models';
import { httpErrorHandler } from '../../utils/http';

@Injectable()
export class CatApiService {
  private readonly baseUrl = environment.catApiUrl;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly toastr: ToastrService,
  ) {}

  private getUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }

  public getAllBreeds(): Observable<CatApiBreed[]> {
    return this.httpClient
      .get<CatApiBreed[]>(this.getUrl('cat-api/breeds'))
      .pipe(
        take(1),
        catchError((e) => httpErrorHandler(e, this.toastr)),
      );
  }

  public getMostSearchedBreeds(): Observable<Breed[]> {
    return this.httpClient
      .get<Breed[]>(this.getUrl('breed/most-searched'))
      .pipe(
        take(1),
        catchError((e) => httpErrorHandler(e, this.toastr)),
      );
  }

  public getBreedPhotos(
    externalId: string,
    limit?: number,
  ): Observable<CatApiBreedPhoto> {
    return this.httpClient
      .get<CatApiBreedPhoto>(this.getUrl('cat-api/breed-photos'), {
        params: {
          b: externalId,
          limit: limit ?? '',
        },
      })
      .pipe(
        take(1),
        catchError((e) => httpErrorHandler(e, this.toastr)),
      );
  }
}
