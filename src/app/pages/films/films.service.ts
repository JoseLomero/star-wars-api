import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(
    private http: HttpClient,
  ) {}

  private filmList = 'https://swapi.co/api/films/';

  getFilms(): Observable<any> {
    return this.http.get<any>(this.filmList)
      .pipe(
        map(response => response.results)
      );
  }

  getFilmDetails(episode: number): Observable<any> {
    return this.http.get<any>(`${this.filmList}${episode}/`);
  }

}
