import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildATradingPlanComponent } from './build-a-trading-plan-component';

describe('BuildATradingPlanComponent', () => {
  let component: BuildATradingPlanComponent;
  let fixture: ComponentFixture<BuildATradingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildATradingPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildATradingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
