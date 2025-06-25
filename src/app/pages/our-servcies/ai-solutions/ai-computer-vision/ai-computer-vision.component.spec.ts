import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIComputerVisionComponent } from './ai-computer-vision.component';

describe('AIComputerVisionComponent', () => {
  let component: AIComputerVisionComponent;
  let fixture: ComponentFixture<AIComputerVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIComputerVisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIComputerVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
