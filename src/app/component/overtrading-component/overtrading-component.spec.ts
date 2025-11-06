import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertradingComponent } from './overtrading-component';

describe('OvertradingComponent', () => {
  let component: OvertradingComponent;
  let fixture: ComponentFixture<OvertradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OvertradingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvertradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
