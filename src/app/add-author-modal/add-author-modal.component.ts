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
  @Input() selectedAuthor: Author;
  authorForm: FormGroup;
  affiliationListForm: FormArray;
  buttonLabel = '';

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    this.createForm();
    this.buttonLabel = this.selectedAuthor ? 'Save' : 'Add';
  }

  private createForm() {
    let { id, name, affiliationList } = this.selectedAuthor || new Author();
    console.log(this.selectedAuthor);
    this.authorForm = this.fb.group({
      authorId: id,
      authorName: name,
      authorAffiliationList: this.fb.array([])
    });
    affiliationList.forEach((aff) => {
      this.affiliationArray.push(this.createAffListItem(aff));
    });
  }

  private createAffListItem(affName?: string): FormGroup {
    return this.fb.group({
      name: affName || ''
    });
  }

  addAff() {
    this.affiliationArray.push(this.createAffListItem());
  }

  removeAff(index: number) {
    this.affiliationArray.removeAt(index);
  }

  private get affiliationArray(): FormArray{
    return this.authorForm.get('authorAffiliationList') as FormArray;
  }

  private submitForm() {
    this.activeModal.close(this.authorForm.value);
  }

}
