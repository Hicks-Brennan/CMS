import { Injectable, EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Documents } from './documents.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentSelectedEvent = new EventEmitter<Documents>();
  private documents: Documents[];
  documentChangedEvent = new Subject<Documents[]>();
  private maxDocumentId: number;

  constructor() { 
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxID();
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

  getMaxID(): number {
    let maxID = 0;
    for (let document of this.documents) {
      let currentID = +document.id;
      if (currentID > maxID) {
        maxID = currentID;
      }
    }

    return maxID;
  }

  addDocument(newDocument: Documents){
    if(!newDocument){
      return
    }

    this.maxDocumentId++
    newDocument.id = (this.maxDocumentId).toString();
    this.documents.push(newDocument);
    this.documentChangedEvent.next(this.documents.slice());
  }
  
  updateDocument(originalDocument: Documents, newDocument: Documents) {
    if (!originalDocument || !newDocument) {
      return;
    }

    let index = this.documents.indexOf(originalDocument);
    if (index < 0) {
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[index] = newDocument;
    let documentListClone = this.documents.slice();
    this.documentChangedEvent.next(documentListClone);
  }

  deleteDocument(document: Documents) {
    if (!document) {
      return;
    }

    const index = this.documents.indexOf(document);
    if (index < 0) {
      return;
    }

    this.documents.splice(index, 1);
    let documentListClone = this.documents.slice();
    this.documentChangedEvent.next(documentListClone);
  }
}