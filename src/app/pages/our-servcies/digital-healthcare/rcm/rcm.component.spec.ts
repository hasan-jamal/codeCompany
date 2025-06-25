import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCMComponent } from './rcm.component';

describe('RCMComponent', () => {
  let component: RCMComponent;
  let fixture: ComponentFixture<RCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RCMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
