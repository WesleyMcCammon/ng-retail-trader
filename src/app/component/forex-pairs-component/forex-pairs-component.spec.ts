import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexPairsComponent } from './forex-pairs-component';

describe('ForexPairsComponent', () => {
  let component: ForexPairsComponent;
  let fixture: ComponentFixture<ForexPairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexPairsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
