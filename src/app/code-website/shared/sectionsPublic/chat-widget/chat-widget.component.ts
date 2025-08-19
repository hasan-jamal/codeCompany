import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-widget',
  imports: [],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.css'
})
export class ChatWidgetComponent {
  botVisible = false;

  toggleBot() {
    this.botVisible = !this.botVisible;
  }
}
