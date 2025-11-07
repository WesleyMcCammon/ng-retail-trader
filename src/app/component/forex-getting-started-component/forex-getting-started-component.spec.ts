import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexGettingStartedComponent } from './forex-getting-started-component';

describe('ForexGettingStartedComponent', () => {
  let component: ForexGettingStartedComponent;
  let fixture: ComponentFixture<ForexGettingStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexGettingStartedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexGettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
