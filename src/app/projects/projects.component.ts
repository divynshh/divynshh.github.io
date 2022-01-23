import { Component, Input, OnInit } from '@angular/core';
import projects from '../../assets/projects.json'
import { ProjectsDTO } from './projectsDTO';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  @Input() screenSize;
  @Input() projectList: ProjectsDTO[];
  
  

  ngOnInit(): void {


    console.log(this.projectList);

  }
  viewResume(){
    console.log("Resume");
    this.openFile();
   }
   openFile() {
     window.open("../../assets/docs/Resume.pdf");
 }
}
