import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IctSolutionsComponent } from './ict-solutions.component';

describe('IctSolutionsComponent', () => {
  let component: IctSolutionsComponent;
  let fixture: ComponentFixture<IctSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IctSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IctSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
