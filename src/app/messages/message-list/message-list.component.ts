import { Component, OnInit } from '@angular/core';
import { Message } from '../messages.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message(1, 'John Doe', 'This is a test message', 'Jane Doe'),
    new Message(1, 'Jane Doe', 'This is a second test message', 'John Doe'),
    new Message(1, 'beck Goodhair', 'This is a third test message', 'Beyonce')
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}
