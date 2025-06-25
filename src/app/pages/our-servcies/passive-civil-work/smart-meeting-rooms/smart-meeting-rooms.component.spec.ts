import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMeetingRoomsComponent } from './smart-meeting-rooms.component';

describe('SmartMeetingRoomsComponent', () => {
  let component: SmartMeetingRoomsComponent;
  let fixture: ComponentFixture<SmartMeetingRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartMeetingRoomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartMeetingRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
