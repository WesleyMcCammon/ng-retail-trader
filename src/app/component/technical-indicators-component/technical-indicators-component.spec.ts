import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalIndicatorsComponent } from './technical-indicators-component';

describe('TechnicalIndicatorsComponent', () => {
  let component: TechnicalIndicatorsComponent;
  let fixture: ComponentFixture<TechnicalIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalIndicatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
