import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Documents } from '../documents.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() documentWasSelected = new EventEmitter<Documents>();
  documents: Documents[] = [
    new Documents(1, "Number 1", "This is Document 1", "www.fake.co", null),
    new Documents(1, "Number 2", "This is Document 2", "www.fake.co", null),
    new Documents(1, "Number 3", "This is Document 3", "www.fake.co", null),
    new Documents(1, "Number 4", "This is Document 4", "www.fake.co", null),
    new Documents(1, "Number 5", "This is Document 5", "www.fake.co", null)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedDocment(document: Documents) {
    this.documentWasSelected.emit(document);
  }

}
