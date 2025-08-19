import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationSecurityComponent } from './automation-security.component';

describe('AutomationSecurityComponent', () => {
  let component: AutomationSecurityComponent;
  let fixture: ComponentFixture<AutomationSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationSecurityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
