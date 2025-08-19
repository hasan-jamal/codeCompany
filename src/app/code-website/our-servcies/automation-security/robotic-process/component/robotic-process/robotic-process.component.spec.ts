import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticProcessComponent } from './robotic-process.component';

describe('RoboticProcessComponent', () => {
  let component: RoboticProcessComponent;
  let fixture: ComponentFixture<RoboticProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
