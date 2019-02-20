import { Component, OnInit } from '@angular/core';
import { PAPER } from '../paper-mock';

@Component({
  selector: 'app-show-title',
  templateUrl: './show-title.component.html',
  styleUrls: ['./show-title.component.css']
})
export class ShowTitleComponent implements OnInit {
  paper = PAPER;
  authorsColSize = 'col-md-12';

  constructor() { }

  ngOnInit() {
    if(this.paper && this.paper.authorList) {
      let authorsPerLine = 12/this.paper.authorList.length;
      let colSize = authorsPerLine < 3 ? 3 : authorsPerLine;
      this.authorsColSize = 'col-md-'+colSize;
      console.log(this.authorsColSize);
    }
  }

}
