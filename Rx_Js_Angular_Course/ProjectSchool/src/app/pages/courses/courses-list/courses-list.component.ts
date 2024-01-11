import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit{
  public courseList:Course[] = [];
  public categoryValue = Object.values(Category)
  public form!: FormGroup;
  private courseService = inject(CoursesService);
  private fb = inject(FormBuilder);


  constructor(){}

  ngOnInit(): void {
    this.getCourses();
    this.validation();
  }

  private validation(): void{
    this.form = this.fb.group({
      category: [''],
      search: [''],
    })
  }

  public doSearch(): void{

  }

  public getCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (response: Course[]) =>{
        this.courseList = response;
      },
      error: (response:any) =>{
        console.log("Erro ao consumir API dos cursos");
      }
    })
  }
}
