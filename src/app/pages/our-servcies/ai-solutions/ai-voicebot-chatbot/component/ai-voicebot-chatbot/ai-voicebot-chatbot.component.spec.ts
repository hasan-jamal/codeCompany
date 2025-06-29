import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiVoicebotChatbotComponent } from './ai-voicebot-chatbot.component';

describe('AiVoicebotChatbotComponent', () => {
  let component: AiVoicebotChatbotComponent;
  let fixture: ComponentFixture<AiVoicebotChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiVoicebotChatbotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiVoicebotChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
