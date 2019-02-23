import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-author-modal',
  templateUrl: './add-author-modal.component.html',
  styleUrls: ['./add-author-modal.component.css']
})
export class AddAuthorModalComponent implements OnInit {
  @Input() test: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
