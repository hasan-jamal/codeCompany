import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleMedicineComponent } from './tele-medicine.component';

describe('TeleMedicineComponent', () => {
  let component: TeleMedicineComponent;
  let fixture: ComponentFixture<TeleMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeleMedicineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
