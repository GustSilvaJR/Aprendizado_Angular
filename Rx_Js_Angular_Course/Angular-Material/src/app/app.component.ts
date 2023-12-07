import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver} from "@angular/cdk/layout"
import { MatSidenav } from '@angular/material/sidenav';
import { fromEvent, map } from 'rxjs';

export const SCROLL_CONTAINER = 'mat-sidenav-container';
export const TEXT_LIMIT = 60;
export const SHADOWN_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild(MatSidenav) sidenav !: MatSidenav;

  public popText = false;
  public showShadow = false;

  constructor(private breakpointObserver: BreakpointObserver) {}



  ngOnInit(): void {
      const container = document.getElementsByClassName(SCROLL_CONTAINER)[0];
      console.log(container, this.popText, document.getElementsByClassName(SCROLL_CONTAINER))

      fromEvent(container, 'scroll')
      .pipe(map(() => container.scrollTop))
      .subscribe ({
        next:(value) => {
          this.determineHeader(value)
          console.log('scrollei')
        }
        })

        container.addEventListener("scroll", (event) => {
          console.log('scrollei')
          this.determineHeader(container.scrollTop)
        });
  }

  determineHeader(top:number){
    console.log(top)
    this.popText = top >= TEXT_LIMIT;
    this.showShadow = top >= SHADOWN_LIMIT;
  }

  // ngAfterContentInit(): void {
  //   this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
  //     next: (result) => {
  //       if (result.matches) {
  //         this.sidenav.close();
  //       } else {
  //         this.sidenav.open();
  //       }
  //     }
  //   })
  // }
}
