import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCabinsComponent } from './smart-cabins.component';

describe('SmartCabinsComponent', () => {
  let component: SmartCabinsComponent;
  let fixture: ComponentFixture<SmartCabinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartCabinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartCabinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
