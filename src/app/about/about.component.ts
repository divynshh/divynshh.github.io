import { HttpClient } from '@angular/common/http';
import { Component,Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeViewerComponent } from '../resume-viewer/resume-viewer.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  //@ViewChild('imageDivAnimate') imageDiv: ElementRef;
  constructor(public dialog: MatDialog ) { }
  @Input() screenSize;
  animateImage = true;
  ngOnInit(): void {
   }

   ngAfterViewInit() {
    //console.log(this.elemRefs);
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.animateImage = false;
  }, 12000);
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


