import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';

@Injectable()
export class ContactService {
  private contacts: Contact[];
  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new Subject<Contact[]>();
  maxContactId: number;

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts() {
    return this.contacts.slice();
  }

  getContact(id: string) {
    for (let contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }
    return null;
  }

  getMaxID() {
    let maxID = 0;
    for (let contact of this.contacts) {
      let currentID = +contact.id;
      if (currentID > maxID) {
        maxID = currentID;
      }
    }

    return maxID;
  }


  addDocument(contact: Contact) {
    if (!contact) {
      return;
    }

    this.maxContactId++;
    contact.id = (this.maxContactId).toString();
    this.contacts.push(contact);
    this.contactChangedEvent.next(this.contacts.slice());
  }

  updateDocument(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) {
      return;
    }

    let index = this.contacts.indexOf(originalContact);
    if (index < 0) {
      return;
    }

    newContact.id = originalContact.id;
    this.contacts[index] = newContact;
    this.contactChangedEvent.next(this.contacts.slice());
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }

    const index = this.contacts.indexOf(contact);
    if (index < 0) {
      return;
    }

    this.contacts.splice(index, 1);
    this.contactChangedEvent.next(this.contacts.slice());
  }
}
