import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeWebsiteComponent } from './code-website.component';

describe('CodeWebsiteComponent', () => {
  let component: CodeWebsiteComponent;
  let fixture: ComponentFixture<CodeWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeWebsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
