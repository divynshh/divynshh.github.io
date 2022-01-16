import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Herotitle2Component } from './herotitle2.component';

describe('Herotitle2Component', () => {
  let component: Herotitle2Component;
  let fixture: ComponentFixture<Herotitle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Herotitle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Herotitle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
