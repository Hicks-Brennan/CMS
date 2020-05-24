import { Component, OnInit } from '@angular/core';
import { Documents } from './documents.model';
import { DocumentService } from './document.service';

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedDocument: Documents;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.documentSelectedEvent.subscribe(
      (document: Documents) => {
      this.selectedDocument = document;
    });
  }

}
