import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexChoosingABrokerComponent } from './forex-choosing-a-broker-component';

describe('ForexChoosingABrokerComponent', () => {
  let component: ForexChoosingABrokerComponent;
  let fixture: ComponentFixture<ForexChoosingABrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexChoosingABrokerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexChoosingABrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
