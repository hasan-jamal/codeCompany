import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-chat-widget',
  imports: [TranslateModule],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.css'
})
export class ChatWidgetComponent {
  botVisible = false;

  toggleBot() {
    this.botVisible = !this.botVisible;
  }
}
