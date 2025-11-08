import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexKeyConceptsComponent } from './forex-key-concepts-component';

describe('ForexKeyConceptsComponent', () => {
  let component: ForexKeyConceptsComponent;
  let fixture: ComponentFixture<ForexKeyConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexKeyConceptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexKeyConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
