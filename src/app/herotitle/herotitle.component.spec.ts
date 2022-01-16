import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerotitleComponent } from './herotitle.component';

describe('HerotitleComponent', () => {
  let component: HerotitleComponent;
  let fixture: ComponentFixture<HerotitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerotitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerotitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
