import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Author } from '../model/author';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-author-modal',
  templateUrl: './add-author-modal.component.html',
  styleUrls: ['./add-author-modal.component.css']
})
export class AddAuthorModalComponent implements OnInit {
  //interfaces
  @Input() selectedAuthor: Author;

  //variables
  authorForm: FormGroup;
  affiliationListForm: FormArray;
  buttonLabel = '';

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.buttonLabel = this.selectedAuthor ? 'Save' : 'Add';
  }

  //getters
  private get affiliationArray(): FormArray {
    return this.authorForm.get('authorAffiliationList') as FormArray;
  }

  //methods
  //initializes form to add or edit author
  private createForm(): void {
    let { id, name, affiliationList } = this.selectedAuthor || new Author();

    this.authorForm = this.fb.group({
      authorId: id,
      authorName: [name, Validators.required],
      authorAffiliationList: this.fb.array([])
    });

    affiliationList.forEach((aff: string) => {
      this.affiliationArray.push(this.createAffListItem(aff));
    });
  }

  //creates form item for affiliations
  private createAffListItem(affName?: string): FormGroup {
    return this.fb.group({
      name: [affName || '', Validators.required]
    });
  }

  //adds affiliation
  private addAff(): void {
    this.affiliationArray.push(this.createAffListItem());
  }

  //removes affiliation
  private removeAff(index: number): void {
    this.affiliationArray.removeAt(index);
  }

  //submits the form data
  private submitForm(): void {
    this.activeModal.close(this.authorForm.value);
  }

}
