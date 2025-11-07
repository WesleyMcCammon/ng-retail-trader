import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexKeyEssentialsComponent } from './forex-key-essentials-component';

describe('ForexKeyEssentialsComponent', () => {
  let component: ForexKeyEssentialsComponent;
  let fixture: ComponentFixture<ForexKeyEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexKeyEssentialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexKeyEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
