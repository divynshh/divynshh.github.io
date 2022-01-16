import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-tray',
  templateUrl: './social-tray.component.html',
  styleUrls: ['./social-tray.component.scss']
})
export class SocialTrayComponent implements OnInit {

  constructor() { }
  @Input() screenSize;
  ngOnInit(): void {
  }

}
