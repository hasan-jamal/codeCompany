import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSectionsComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableSectionsComponent;
  let fixture: ComponentFixture<TableSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
