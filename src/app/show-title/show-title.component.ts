import { Component, OnInit, Input } from '@angular/core';
import { Paper } from '../model/paper';
import { Author } from '../model/author';

@Component({
  selector: 'app-show-title',
  templateUrl: './show-title.component.html',
  styleUrls: ['./show-title.component.css']
})
export class ShowTitleComponent implements OnInit {
  @Input() paper: Paper;

  authorsColSize = '';
  affiliationList: string[];

  constructor() { }

  ngOnInit() {
    this.setAuthorColSize();
    this.getAffiliationList();
    this.getAffiliationSup();

  }

  setAuthorColSize() {
    if (this.paper && this.paper.authorList) {
      let authorsPerLine = 12 / this.paper.authorList.length;
      let colSize = authorsPerLine < 3 ? 3 : authorsPerLine;
      this.authorsColSize = 'author col-md-' + colSize;
    }
  }

  getAffiliationList() {
    let affiliationSet = new Set();
    this.paper.authorList.forEach(author => {
      author.affiliationList.forEach(aff => {
        affiliationSet.add(aff);
      })
    });
    this.affiliationList = [...affiliationSet];
  }

  getAffiliationSup() {
    this.paper.authorList.forEach(author => {
      let order: number[] = [];
      author.affiliationList.forEach(aff => {
        let index = this.affiliationList.indexOf(aff)+1;
        if (index) {
          order.push(index);
        }
      });
      author.affiliationOrder = order.join(',');
    });
  }

}
