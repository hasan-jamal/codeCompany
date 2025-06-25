import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMobileAppDevelopmentComponent } from './web-mobile-app-development.component';

describe('WebMobileAppDevelopmentComponent', () => {
  let component: WebMobileAppDevelopmentComponent;
  let fixture: ComponentFixture<WebMobileAppDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebMobileAppDevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebMobileAppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
