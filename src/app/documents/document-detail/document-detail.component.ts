import { Component, OnInit, Input } from '@angular/core';
import { Documents } from '../documents.model';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WindRefService } from 'src/app/wind-ref.service';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: Documents;
  id: string;
  nativeWindow: any;

  constructor(private documentService: DocumentService,
    private windRef: WindRefService,
              private route: ActivatedRoute,
              private router: Router) {
                this.nativeWindow = windRef.getNativeWindow();
               }

    ngOnInit(): void {
      this.route.params.subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.document = this.documentService.getDocument(this.id);
        }
      );
  }

  onView() {
    if(this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/documents']);
    
  }

}
