import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaciveFormComponent } from './reacive-form.component';

describe('ReaciveFormComponent', () => {
  let component: ReaciveFormComponent;
  let fixture: ComponentFixture<ReaciveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaciveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaciveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
