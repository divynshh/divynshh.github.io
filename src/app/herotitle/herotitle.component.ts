import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herotitle',
  templateUrl: './herotitle.component.html',
  styleUrls: ['./herotitle.component.scss']
})
export class HerotitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openResume(){
    window.open('https://github.com/divynshh/MyPortFolio/raw/gh-pages/assets/docs/Resume.pdf', '_blank').focus();

  }


}
