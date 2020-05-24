import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message } from '../messages.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject', {static: false}) subjectRef: ElementRef;
  @ViewChild('message', {static:false}) messageRef: ElementRef;
  @Output() messageAdded = new EventEmitter<Message>();
  public currentSender: string = '1';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onSendMessage() {
    const msgSubject = this.subjectRef.nativeElement.value;
    const msgMessage = this.messageRef.nativeElement.value;
    const newMessage = new Message('1', msgSubject, msgMessage, this.currentSender);
    this.messageService.addMessage(newMessage);
    this.onClear();
  }

  onClear() {
    this.subjectRef.nativeElement.value = '';
    this.messageRef.nativeElement.value = '';
  }


}
