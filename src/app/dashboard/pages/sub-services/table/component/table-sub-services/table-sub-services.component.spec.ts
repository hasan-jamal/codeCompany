import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSubServicesComponent } from './table-sub-services.component';

describe('TableSubServicesComponent', () => {
  let component: TableSubServicesComponent;
  let fixture: ComponentFixture<TableSubServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSubServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSubServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
