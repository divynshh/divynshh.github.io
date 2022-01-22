import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-skill-scale',
  templateUrl: './skill-scale.component.html',
  styleUrls: ['./skill-scale.component.scss']
})
export class SkillScaleComponent implements OnInit {  

  constructor() { }
  @Input() screenSize;
  @Input() rating;
  @Input() skillName;
  
  ratingArray: boolean[] = [false,false,false,false,false];
  ngOnInit(): void {
    
    for(let i=0;i<this.rating;i++){

      this.ratingArray[i]=true;

    }
    
  }

  fillRating(rating){
  }

  ngAfterViewInit() {
    //console.log(this.elemRefs);
    console.log("After VIew")
    this.fillRating(this.rating);
  } 

}
