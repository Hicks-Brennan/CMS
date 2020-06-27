import { Component, OnInit } from '@angular/core';
import { Documents } from '../documents.model';
import { DocumentService } from '../document.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  originalDocument: Documents;
  document: Documents;
  editMode: boolean = false;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.editMode = false;
        let id = params['id'];
        if (!id) {
          return;
        }
        let document = this.documentService.getDocument(id);
        if (!document) {
          return;
        }

        this.originalDocument = document;
        this.editMode = true;
        this.document = JSON.parse(JSON.stringify(document));
      });
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onSubmit(form: NgForm) {
    // console.log("submit");
    const value = form.value;
    let newDocument = new Documents(value['id'], value['name'], value['description'], value['url'], null);
    if(this.editMode) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }
    this.onCancel();

  }

}
