import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillScaleComponent } from './skill-scale.component';

describe('SkillScaleComponent', () => {
  let component: SkillScaleComponent;
  let fixture: ComponentFixture<SkillScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
