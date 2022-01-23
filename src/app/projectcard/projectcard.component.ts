import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.scss']
})
export class ProjectcardComponent implements OnInit {

  constructor() { }
  @Input() screenSize;
  @Input() title;
  @Input() image;
  @Input() details;
  @Input() techStack;
  @Input() link;

  ngOnInit(): void {

    console.log("link"  + this.link);
    console.log("title"  + this.title);

  }

  navigate(link){
    window.open(this.link, "_blank");
  }

  

}
