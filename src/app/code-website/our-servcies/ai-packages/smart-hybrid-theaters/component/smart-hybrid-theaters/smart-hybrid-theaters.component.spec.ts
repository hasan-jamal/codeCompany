import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartHybridTheatersComponent } from './smart-hybrid-theaters.component';

describe('SmartHybridTheatersComponent', () => {
  let component: SmartHybridTheatersComponent;
  let fixture: ComponentFixture<SmartHybridTheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartHybridTheatersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartHybridTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
