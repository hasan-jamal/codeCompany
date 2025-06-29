import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiComputerVisionComponent } from './ai-computer-vision.component';

describe('AiComputerVisionComponent', () => {
  let component: AiComputerVisionComponent;
  let fixture: ComponentFixture<AiComputerVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiComputerVisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiComputerVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
