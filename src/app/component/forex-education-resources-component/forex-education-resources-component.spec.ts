import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexEducationResourcesComponent } from './forex-education-resources-component';

describe('ForexEducationResourcesComponent', () => {
  let component: ForexEducationResourcesComponent;
  let fixture: ComponentFixture<ForexEducationResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexEducationResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexEducationResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
