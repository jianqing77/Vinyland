import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vinyl } from '../common/vinyl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

// using the HttpClient to fetch data from the backend API
export class VinylService {
  private baseUrl = 'http://localhost:8080/api/vinyls';

  constructor(private httpClient: HttpClient) {}

  getVinylList(theCategoryId: number): Observable<Vinyl[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.vinyls));
  }
}

// supporter interface
// unwraps the JSON from Spring Data REST _embedded entity
interface GetResponse {
  _embedded: {
    vinyls: Vinyl[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
