import { Component,Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import projects from '../../assets/projects.json'
import { ProjectsDTO } from '../projects/projectsDTO';
import { MatDialog } from '@angular/material/dialog';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]

})

export class NavbarComponent  {

@ViewChild('drawer') drawer: MatDrawer;
  isSideNavOpen = false;
  @Input() screenSize;
  projectList : ProjectsDTO[];
  isBlog=false;
  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog) {

      this.projectList = projects;


  }

  toggleSideNav(){
    this.isSideNavOpen = !this.isSideNavOpen;

  }

  scroll(el) {
    this.drawer.close();
    this.isBlog = false;
    delay(1000);
    el = document.getElementById(el);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    
}

goToBlog(){
  this.isBlog = !this.isBlog;
  this.drawer.close();
}


}
