import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Course } from '@app/shared/models/course';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseURL = `${environment.apiURL}/courses`;



  private http = inject(HttpClient);

  constructor() {
  }

  public getCourses(currentPage:number, pageSize:number, category:string, search:string): Observable<HttpResponse<any>> {
    console.log('Aqui', environment.apiURL);
    let url = `${this.baseURL}?_page=${currentPage}&_limit=${pageSize} `;
    console.log('Aqui', url);

    if(search)
      url = `${url}&q=${search}`;

    console.log('Aqui', url);

    if(category)
      url = `${url}&category=${category}`;

    console.log('Aqui', url);

    return this.http.get<Course[]>(`${url}`, {observe: 'response'}).pipe(take(1));
  }

  public getCourseById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}/${id}`).pipe(take(1));
  }

  public createCourse(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.baseURL}`, course).pipe(take(1));
  }

  public changeCourse(id: number, course:Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.baseURL}/${id}`, course).pipe(take(1));
  }

  public deleteCourse(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.baseURL}/${id}`).pipe(take(1));
  }


}
