import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Documents } from '../documents.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Documents[] = [];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }

  onSelectedDocment(document: Documents) {
    this.documentService.documentSelectedEvent.emit(document);
  }

}
