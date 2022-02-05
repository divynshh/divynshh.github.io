import { Component,Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import projects from '../../assets/projects.json'
import { ProjectsDTO } from '../projects/projectsDTO';
import { MatDialog } from '@angular/material/dialog';
import { ResumeViewerComponent } from '../resume-viewer/resume-viewer.component';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/material/select';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  isSideNavOpen = false;
  @Input() screenSize;
  projectList : ProjectsDTO[];

  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog) {

      this.projectList = projects;


  }

  toggleSideNav(){
    this.isSideNavOpen = !this.isSideNavOpen;

  }

  scroll(el) {
    el = document.getElementById(el);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}


}
