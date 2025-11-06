import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasingTheMarketComponent } from './chasing-the-market-component';

describe('ChasingTheMarketComponent', () => {
  let component: ChasingTheMarketComponent;
  let fixture: ComponentFixture<ChasingTheMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChasingTheMarketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChasingTheMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
