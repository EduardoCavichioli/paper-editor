import { Component, OnInit } from '@angular/core';
import { PAPER } from '../paper-mock';

@Component({
  selector: 'app-show-title',
  templateUrl: './show-title.component.html',
  styleUrls: ['./show-title.component.css']
})
export class ShowTitleComponent implements OnInit {
  paper = PAPER;

  constructor() { }

  ngOnInit() {
    console.log(this.paper);
  }

}
