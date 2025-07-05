import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveCivilWorkComponent } from './passive-civil-work.component';

describe('PassiveCivilWorkComponent', () => {
  let component: PassiveCivilWorkComponent;
  let fixture: ComponentFixture<PassiveCivilWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassiveCivilWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassiveCivilWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
