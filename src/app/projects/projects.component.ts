import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import projects from '../../assets/projects.json'
import { ResumeViewerComponent } from '../resume-viewer/resume-viewer.component';
import { ProjectsDTO } from './projectsDTO';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  @Input() screenSize;
  @Input() projectList: ProjectsDTO[];
  
  
  

  ngOnInit(): void {


    console.log(this.projectList);

  }
  viewResume(){
    console.log("Resume");
    this.openDialog();
    //this.openFile();
   }
   openFile() {
     window.open("../../assets/docs/Resume.pdf");
 }

 openDialog(): void {
  const dialogRef = this.dialog.open(ResumeViewerComponent, {
    width: '95%',
    height: '90%',
    backdropClass : 'backDrop',
    panelClass: 'dialog-custom' 
    
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });
}
}
