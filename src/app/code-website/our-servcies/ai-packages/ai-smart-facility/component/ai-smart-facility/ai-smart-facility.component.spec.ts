import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSmartFacilityComponent } from './ai-smart-facility.component';

describe('AiSmartFacilityComponent', () => {
  let component: AiSmartFacilityComponent;
  let fixture: ComponentFixture<AiSmartFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSmartFacilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSmartFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
