import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-herotitle2',
  templateUrl: './herotitle2.component.html',
  styleUrls: ['./herotitle2.component.scss']
})
export class Herotitle2Component implements OnInit {

  constructor() { }
  @Input() screenSize;
  ngOnInit(): void {
  }


  openResume(){
    window.open('https://github.com/divynshh/MyPortFolio/raw/gh-pages/assets/docs/Resume.pdf', '_blank').focus();

  }

}
