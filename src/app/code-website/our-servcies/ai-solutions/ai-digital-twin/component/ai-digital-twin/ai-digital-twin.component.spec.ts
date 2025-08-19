import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDigitalTwinComponent } from './ai-digital-twin.component';

describe('AiDigitalTwinComponent', () => {
  let component: AiDigitalTwinComponent;
  let fixture: ComponentFixture<AiDigitalTwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiDigitalTwinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiDigitalTwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
