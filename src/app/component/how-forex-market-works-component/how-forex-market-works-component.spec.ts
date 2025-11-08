import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowForexMarketWorksComponent } from './how-forex-market-works-component';

describe('HowForexMarketWorksComponent', () => {
  let component: HowForexMarketWorksComponent;
  let fixture: ComponentFixture<HowForexMarketWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowForexMarketWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowForexMarketWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
