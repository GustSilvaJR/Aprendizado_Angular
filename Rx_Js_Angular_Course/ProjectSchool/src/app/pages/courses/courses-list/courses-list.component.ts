import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/course';
import { EMPTY, Observable, Subscription, catchError, debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {

  private courseService = inject(CoursesService);
  private _snackBar = inject(MatSnackBar);

  public courseList: Course[] = [];
  public categoryValue = Object.values(Category);
  public form!: FormGroup;
  private fb = inject(FormBuilder);
  public courseData!: Observable<any>;

  public totalCount: number = 0;
  public currentPage: number = 1;
  public pageSize: number = 5;

  constructor() {}

  ngOnInit(): void {
    this.validation();
    this.form.valueChanges.subscribe((value) => {
      debounceTime(1000);
      if (value) {
        this.getCourses(
          this.currentPage,
          this.pageSize,
          this.f.category.value ?? '',
          this.f.search.value ?? ''
        );
      }
    });
    this.getCourses(1, 5, '', '');
  }

  private validation(): void {
    this.form = this.fb.group({
      category: [''],
      search: [''],
    });
  }

  public doSearch(): void {
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }

  public get f(): any {
    return this.form.controls;
  }

  public getCourses(
    currentPage: number,
    pageSize: number,
    category: string,
    search: string
  ): void {
    this.courseData = this.courseService.getCourses(currentPage, pageSize, category, search).pipe(
      tap((response: HttpResponse<any>) => {
        this.courseList = response.body as Course[];
        let totalCount = response.headers.get('X-Total-Count');
        this.totalCount = totalCount ? Number(totalCount) : 0;
      }),
      catchError((err:string) => {
        this._snackBar.open(`Erro: ${err}`, "Close", {
          duration: 2000
        });
        return EMPTY;
      })
    );
  }

  public handlePageEvent(e: PageEvent): void {
    this.currentPage = e.pageIndex + 1;
    this.pageSize = e.pageSize;
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }
}
