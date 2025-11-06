import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveMistakesComponent } from './top-five-mistakes-component';

describe('TopFiveMistakesComponent', () => {
  let component: TopFiveMistakesComponent;
  let fixture: ComponentFixture<TopFiveMistakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopFiveMistakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFiveMistakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
