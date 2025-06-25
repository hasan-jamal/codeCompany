import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseConsolidationComponent } from './database-consolidation.component';

describe('DatabaseConsolidationComponent', () => {
  let component: DatabaseConsolidationComponent;
  let fixture: ComponentFixture<DatabaseConsolidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseConsolidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseConsolidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
