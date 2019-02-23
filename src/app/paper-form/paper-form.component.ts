import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Paper } from '../model/paper';

@Component({
  selector: 'app-paper-form',
  templateUrl: './paper-form.component.html',
  styleUrls: ['./paper-form.component.css']
})
export class PaperFormComponent implements OnInit {
  @Output() dispatchResetForm: EventEmitter<any> = new EventEmitter();
  @Output() dispatchSaveForm: EventEmitter<any> = new EventEmitter();
  @Input() paper: Paper;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onReset(): void {
    this.dispatchResetForm.emit();
  }

  onSubmit(){
    this.dispatchSaveForm.emit();
  }

  removeAuthor(id: number): void {
    let { authorList } = this.paper;
    let index = authorList.map(author => author.id).indexOf(id);
    authorList.splice(index,1);
  }

  open(modal){
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }
}
