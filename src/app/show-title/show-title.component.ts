import { Component, OnInit, Input } from '@angular/core';
import { Paper } from '../model/paper';

@Component({
  selector: 'app-show-title',
  templateUrl: './show-title.component.html',
  styleUrls: ['./show-title.component.css']
})
export class ShowTitleComponent implements OnInit {
  @Input() paper: Paper;
  authorsColSize = '';

  constructor() { }

  ngOnInit() {
    if(this.paper && this.paper.authorList) {
      let authorsPerLine = 12/this.paper.authorList.length;
      let colSize = authorsPerLine < 3 ? 3 : authorsPerLine;
      this.authorsColSize = 'author col-md-'+colSize;
      console.log(this.authorsColSize);
    }
  }

}
