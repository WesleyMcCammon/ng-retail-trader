import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexPropFirmsComponent } from './forex-prop-firms-component';

describe('ForexPropFirmsComponent', () => {
  let component: ForexPropFirmsComponent;
  let fixture: ComponentFixture<ForexPropFirmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexPropFirmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexPropFirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
