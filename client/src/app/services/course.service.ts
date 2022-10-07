import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model';
import { HttpClient } from '@angular/common/http';

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
}
