import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter, fromEvent, map } from 'rxjs';
import { MenuItem } from '@app/shared/models/menuItem';
import { menuItems } from '@app/shared/models/menu';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isSmallScreen = false;
  public popText = false;
  public applyShadow:boolean = false;
  public items_menu:MenuItem[] = menuItems;
  public breakpointObserver;
  public route;
  public activatedRoute;
  public menuTitle = '';

  constructor() {
    this.breakpointObserver = inject(BreakpointObserver);
    this.route = inject(Router);
    this.activatedRoute = inject(ActivatedRoute);
  }

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
      .pipe(map(() => content.scrollTop))
      .subscribe((value: number) => this.determineHeader(value))

    this.route.events.pipe(
        filter(event => event instanceof NavigationEnd),
      )
    .subscribe(() => {
      this.menuTitle = this.activatedRoute.firstChild?.snapshot.routeConfig?.path ?? "";
    })

  }

  determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this.breakpointObserver
        .observe(['(max-width: 800px)'])
        .subscribe((res) => this.isSmallScreen = res.matches);
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
