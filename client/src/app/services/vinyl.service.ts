import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vinyl } from '../common/vinyl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Genre } from '../common/genre';

@Injectable({
  providedIn: 'root',
})

// using the HttpClient to fetch data from the backend API
export class VinylService {
  private baseUrl = 'http://localhost:8080/api/vinyls';
  private genreUrl = 'http://localhost:8080/api/genre';

  constructor(private httpClient: HttpClient) {}

  getVinylList(): Observable<Vinyl[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.vinyls));
  }

  // Service to retrieve list of genres from the backend API
  getVinylGenre(): Observable<Genre[]> {
    return this.httpClient
      .get<GetResponseVinylGenre>(this.genreUrl)
      .pipe(map((response) => response._embedded.genre));
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

interface GetResponseVinylGenre {
  _embedded: {
    genre: Genre[];
  };
}
