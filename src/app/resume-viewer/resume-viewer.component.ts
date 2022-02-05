import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-viewer',
  templateUrl: './resume-viewer.component.html',
  styleUrls: ['./resume-viewer.component.scss']
})
export class ResumeViewerComponent implements OnInit {

  constructor() { }
  @Input() screenSize;
  ngOnInit(): void {
  }

}
