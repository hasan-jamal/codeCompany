import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCloudEngineeringComponent } from './data-cloud-engineering.component';

describe('DataCloudEngineeringComponent', () => {
  let component: DataCloudEngineeringComponent;
  let fixture: ComponentFixture<DataCloudEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCloudEngineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCloudEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
