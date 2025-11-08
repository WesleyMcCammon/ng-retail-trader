import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexGiftShopComponent } from './forex-gift-shop-component';

describe('ForexGiftShopComponent', () => {
  let component: ForexGiftShopComponent;
  let fixture: ComponentFixture<ForexGiftShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForexGiftShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForexGiftShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
