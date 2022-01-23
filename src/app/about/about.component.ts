import { HttpClient } from '@angular/common/http';
import { Component,Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  //@ViewChild('imageDivAnimate') imageDiv: ElementRef;
  constructor() { }
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
     this.openFile();
    }
    openFile() {
      window.open("../../assets/docs/Resume.pdf");
  }

  }


