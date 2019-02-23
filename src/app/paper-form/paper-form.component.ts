import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Paper } from '../model/paper';
import { AddAuthorModalComponent } from './../add-author-modal/add-author-modal.component';
import { Author } from '../model/author';

@Component({
  selector: 'app-paper-form',
  templateUrl: './paper-form.component.html',
  styleUrls: ['./paper-form.component.css']
})
export class PaperFormComponent implements OnInit {
  //interfaces
  @Input() paper: Paper;
  @Output() dispatchResetForm: EventEmitter<any> = new EventEmitter();
  @Output() dispatchSaveForm: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  //getters
  private get authors(): Author[] {
    return this.paper.authorList;
  }

  //methods
  //resets the paper to localStorage state
  private onReset(): void {
    this.dispatchResetForm.emit();
  }

  //saves paper's state to localStorage
  private onSubmit(): void {
    this.dispatchSaveForm.emit();
  }

  //removes author from paper
  private removeAuthor(id: number): void {
    let { authorList } = this.paper;
    let index = authorList.map(author => author.id).indexOf(id);
    authorList.splice(index, 1);
  }

  //opens modal to add or edit author
  private open(selectedAuthor?: Author): void {
    const modalRef = this.modalService.open(AddAuthorModalComponent);
    modalRef.componentInstance.selectedAuthor = selectedAuthor;

    modalRef.result.then((result) => {
      let index = this.authors.map((author) => author.id).indexOf(result.authorId);
      if (index >= 0) {
        this.modifyAuthor(index, result);
      } else {
        this.addAuthor(result);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  //modifies author from paper through modal
  private modifyAuthor(index: number, result: any): void {
    let changedAuthor = this.authors[index];
    changedAuthor.name = result.authorName;
    changedAuthor.affiliationList = result.authorAffiliationList.map((aff: any) => aff.name);
  }

  //adds author to paper through modal
  private addAuthor(result: any): void {
    let newAuthor = new Author();
    newAuthor.id = result.authorId;
    newAuthor.name = result.authorName;
    newAuthor.affiliationList = result.authorAffiliationList.map((aff: any) => aff.name);
    this.authors.push(newAuthor);
  }

  //moves author to the right
  private moveRight(author: Author): void {
    let index: number = this.authors.map((author: Author) => author.id).indexOf(author.id);
    if (index < this.authors.length - 1) {
      let first: Author = this.authors.splice(index, 1, this.authors[index + 1])[0];
      this.authors.splice(index + 1, 1, first);
    }
  }

  //moves author to the left
  private moveLeft(author: Author): void {
    let index: number = this.authors.map((author: Author) => author.id).indexOf(author.id);
    if (index > 0) {
      let first: Author = this.authors.splice(index - 1, 1, this.authors[index])[0];
      this.authors.splice(index, 1, first);
    }
  }
}