import { Component,Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import projects from '../../assets/projects.json'
import { ProjectsDTO } from '../projects/projectsDTO';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  isSideNavOpen = false;
  @Input() screenSize;
  projectList : ProjectsDTO[];

  constructor(private breakpointObserver: BreakpointObserver) {

      this.projectList = projects;


  }

  toggleSideNav(){
    this.isSideNavOpen = !this.isSideNavOpen;

  }

  scroll(el) {
    el = document.getElementById(el);
    el.scrollIntoView()
}
}
