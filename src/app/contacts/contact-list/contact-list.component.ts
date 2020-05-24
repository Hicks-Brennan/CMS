import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {
  @Output() contactWasSelected = new EventEmitter<Contact>();
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onSelected(contact: Contact) {
    this.contactWasSelected.emit(contact);
  }

}
