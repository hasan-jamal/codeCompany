import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePointSolutionsComponent } from './share-point-solutions.component';

describe('SharePointSolutionsComponent', () => {
  let component: SharePointSolutionsComponent;
  let fixture: ComponentFixture<SharePointSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharePointSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharePointSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
