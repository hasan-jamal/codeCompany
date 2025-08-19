import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInnovationHubComponent } from './ai-innovation-hub.component';

describe('AiInnovationHubComponent', () => {
  let component: AiInnovationHubComponent;
  let fixture: ComponentFixture<AiInnovationHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiInnovationHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiInnovationHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
