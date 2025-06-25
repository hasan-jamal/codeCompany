import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIVoicebotChatbotComponent } from './ai-voicebot-chatbot.component';

describe('AIVoicebotChatbotComponent', () => {
  let component: AIVoicebotChatbotComponent;
  let fixture: ComponentFixture<AIVoicebotChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIVoicebotChatbotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIVoicebotChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
