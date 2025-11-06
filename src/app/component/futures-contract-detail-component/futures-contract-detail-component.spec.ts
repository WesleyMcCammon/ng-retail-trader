import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturesContractDetailComponent } from './futures-contract-detail-component';

describe('FuturesContractDetailComponent', () => {
  let component: FuturesContractDetailComponent;
  let fixture: ComponentFixture<FuturesContractDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturesContractDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturesContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
