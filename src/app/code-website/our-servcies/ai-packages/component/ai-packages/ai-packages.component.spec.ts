import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPackagesComponent } from './ai-packages.component';

describe('AiPackagesComponent', () => {
  let component: AiPackagesComponent;
  let fixture: ComponentFixture<AiPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
