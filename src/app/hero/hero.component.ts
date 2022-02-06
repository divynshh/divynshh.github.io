import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],

  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {

  @Input() screenSize;

  ngOnInit(): void {
  }

  
}


