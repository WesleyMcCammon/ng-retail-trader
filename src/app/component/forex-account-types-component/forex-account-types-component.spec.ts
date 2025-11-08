import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexAccountTypesComponent } from './forex-account-types-component';

describe('ForexAccountTypesComponent', () => {
  let component: ForexAccountTypesComponent;
  let fixture: ComponentFixture<ForexAccountTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexAccountTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexAccountTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
