import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIInnovationHubComponent } from './ai-innovation-hub.component';

describe('AIInnovationHubComponent', () => {
  let component: AIInnovationHubComponent;
  let fixture: ComponentFixture<AIInnovationHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIInnovationHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIInnovationHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
