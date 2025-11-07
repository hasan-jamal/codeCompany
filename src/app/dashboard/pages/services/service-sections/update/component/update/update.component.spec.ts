import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceSectionComponent } from './update.component';

describe('UpdateServiceSectionComponent', () => {
  let component: UpdateServiceSectionComponent;
  let fixture: ComponentFixture<UpdateServiceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateServiceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateServiceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
