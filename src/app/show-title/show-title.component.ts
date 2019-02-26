import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Paper } from '../model/paper';
import { Author } from '../model/author';

@Component({
  selector: 'app-show-title',
  templateUrl: './show-title.component.html',
  styleUrls: ['./show-title.component.css']
})
export class ShowTitleComponent implements OnInit, DoCheck {
  //interfaces
  @Input() paper: Paper;

  //variables
  authorsColSize: string = '';
  affiliationList: string[];

  constructor() { }

  ngOnInit() {
    this.updatePreview();
  }

  ngDoCheck() {
    this.updatePreview();
  }

  //methods
  //updates paper preview
  private updatePreview(): void {
    this.setAuthorColSize();
    this.getAffiliationList();
    this.getAffiliationSup();
  }

  //sets column size for authors in paper preview
  private setAuthorColSize(): void {
    if (this.paper && this.paper.authorList) {
      let authorsPerLine: number = 12 / this.paper.authorList.length;
      let colSize: number = authorsPerLine < 3 ? 3 : authorsPerLine;
      this.authorsColSize = 'author col-md-' + colSize;
    }
  }

  //generates affiliation list using authors data
  private getAffiliationList(): void {
    let affiliationSet: Set<string> = new Set();
    this.paper.authorList.forEach((author: Author) => {
      author.affiliationList.forEach((aff: string) => {
        affiliationSet.add(aff.toLowerCase());
      })
    });
    this.affiliationList = [...affiliationSet];
  }

  //generates authors sup for affiliations using list created in getAffiliationList() method
  private getAffiliationSup(): void {
    this.paper.authorList.forEach((author: Author) => {
      let order: number[] = [];
      author.affiliationList.forEach((aff: string) => {
        let index: number = this.affiliationList.indexOf(aff) + 1;
        if (index) {
          order.push(index);
        }
      });
      author.affiliationOrder = order.sort((a, b) => a - b).join(',');
    });
  }
}
