import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexTopBrokersComponent } from './forex-top-brokers-component';

describe('ForexTopBrokersComponent', () => {
  let component: ForexTopBrokersComponent;
  let fixture: ComponentFixture<ForexTopBrokersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexTopBrokersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexTopBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
