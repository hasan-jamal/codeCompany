import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSmartCityComponent } from './ai-smart-city.component';

describe('AiSmartCityComponent', () => {
  let component: AiSmartCityComponent;
  let fixture: ComponentFixture<AiSmartCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSmartCityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSmartCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
