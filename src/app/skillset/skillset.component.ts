import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent implements OnInit {

  constructor() { }
  @Input() screenSize;

  @Input() skillSet;
  ngOnInit(): void {
    console.log("skill set " + this.skillSet);
  }

}
