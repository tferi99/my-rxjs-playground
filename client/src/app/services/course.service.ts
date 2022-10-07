import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../model';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/course');
  }

  get(id: number): Observable<Course> {
    return this.http.get<Course>('/api/course/' + id);
  }

  getWitErr(id: number): Observable<Course> {
    return this.http.get<Course>('/apiX/course/' + id);
  }

  private search(term) {
    let url = `/api/course/search/${term}`;
    if (term === 'error') {
      url = `/apiX/course/search/${term}`;   // bad URL
    }
    return this.http.get<any>(url);
  }

  searchOk(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.search(term).pipe(
          catchError(error => {
            console.log('Caught search error the right way!');
            return of({ error: error.message });
          })
        )
      )
    );
  }

  searchBadCatch(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.search(term)),
      catchError(error => {
        console.log('Caught search error the wrong way!');
        return of({ error: error.message });
      })
    );
  }
}
