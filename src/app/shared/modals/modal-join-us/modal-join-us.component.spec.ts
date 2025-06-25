import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJoinUsComponent } from './modal-join-us.component';

describe('ModalJoinUsComponent', () => {
  let component: ModalJoinUsComponent;
  let fixture: ComponentFixture<ModalJoinUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalJoinUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalJoinUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
