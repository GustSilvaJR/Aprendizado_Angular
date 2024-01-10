import { Component, OnInit, inject } from '@angular/core';
import { CoursesService } from '@app/services/courses.service';
import { Course } from '@app/shared/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit{
  public courseList:Course[] = [];
  private courseService = inject(CoursesService);

  constructor(){}

  ngOnInit(): void {
    this.getCourses();
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
