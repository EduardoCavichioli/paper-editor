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
  @Output() dispatchReloadForm: EventEmitter<any> = new EventEmitter();
  @Output() dispatchSaveForm: EventEmitter<any> = new EventEmitter();
  @Output() dispatchResetForm: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  //getters
  private get authors(): Author[] {
    return this.paper.authorList;
  }

  //methods
  //reloads the paper to localStorage state
  private onReload(): void {
    this.dispatchReloadForm.emit();
  }

  //saves paper's state to localStorage
  private onSubmit(): void {
    this.dispatchSaveForm.emit();
  }

  //clear all form data
  private onReset(): void {
    this.dispatchResetForm.emit();
  }

  //removes author from paper
  private removeAuthor(id: number): void {
    let { authorList } = this.paper;
    let index: number = authorList.map(author => author.id).indexOf(id);
    authorList.splice(index, 1);
  }

  //opens modal to add or edit author
  private open(selectedAuthor?: Author): void {
    const modalRef = this.modalService.open(AddAuthorModalComponent);
    modalRef.componentInstance.selectedAuthor = selectedAuthor;

    modalRef.result.then((result: any) => {
      let index: number = this.authors.map(author => author.id).indexOf(result.authorId);
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
    changedAuthor.affiliationList = this.formatAffList(result.authorAffiliationList);
  }

  //adds author to paper through modal
  private addAuthor(result: any): void {
    let newAuthor = new Author();
    newAuthor.id = result.authorId;
    newAuthor.name = result.authorName;
    newAuthor.affiliationList = this.formatAffList(result.authorAffiliationList);
    this.authors.push(newAuthor);
  }

  //returns affiliation list as string array
  private formatAffList(affList: any[]): string[] {
    let unique: Set<string> = new Set(affList.map((aff: any) => aff.name.toLowerCase()));
    return [ ...unique ];
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