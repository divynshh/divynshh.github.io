import { Component,Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  isSideNavOpen = false;
  @Input() screenSize;

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleSideNav(){
    this.isSideNavOpen = !this.isSideNavOpen;

  }

  scroll(el) {
    el = document.getElementById(el);
    el.scrollIntoView()
}
}
