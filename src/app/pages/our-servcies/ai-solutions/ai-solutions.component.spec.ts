import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AISolutionsComponent } from './ai-solutions.component';

describe('AISolutionsComponent', () => {
  let component: AISolutionsComponent;
  let fixture: ComponentFixture<AISolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AISolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AISolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
