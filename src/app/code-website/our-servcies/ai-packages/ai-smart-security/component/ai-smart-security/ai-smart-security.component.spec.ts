import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSmartSecurityComponent } from './ai-smart-security.component';

describe('AiSmartSecurityComponent', () => {
  let component: AiSmartSecurityComponent;
  let fixture: ComponentFixture<AiSmartSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSmartSecurityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSmartSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
