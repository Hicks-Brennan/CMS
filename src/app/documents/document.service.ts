import { Injectable, EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Documents } from './documents.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentSelectedEvent = new EventEmitter<Documents>();
  private documents: Documents[];

  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments() {
    return this.documents.slice();
  }

  getDocument(id: string){
    for(let document of this.documents){
     if (document.id === id){
       return document;
     }
    }
    return null;
  }
}
