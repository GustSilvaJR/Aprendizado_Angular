import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/course';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit OnDestroy {
  public courseList: Course[] = [];
  public categoryValue = Object.values(Category);
  public form!: FormGroup;
  private courseService = inject(CoursesService);
  private fb = inject(FormBuilder);
  private sub!: Subscription;

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

  ngOnDestroy(): void {
      this.sub.unsubscribe();
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
    this.sub = this.courseService
      .getCourses(currentPage, pageSize, category, search)
      .subscribe({
        next: (response: HttpResponse<any>) => {
          this.courseList = response.body as Course[];
          let totalCount = response.headers.get('X-Total-Count');
          this.totalCount = totalCount ? Number(totalCount) : 0;
        },

        error: (response: any) => {
          console.log('Erro ao consumir API dos cursos');
        },
      });
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
