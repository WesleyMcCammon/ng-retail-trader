import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexIndicatorsComponent } from './forex-indicators-component';

describe('ForexIndicatorsComponent', () => {
  let component: ForexIndicatorsComponent;
  let fixture: ComponentFixture<ForexIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexIndicatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
