import { Component, OnInit, Input } from '@angular/core';
import { Paper } from '../model/paper';

@Component({
  selector: 'app-paper-form',
  templateUrl: './paper-form.component.html',
  styleUrls: ['./paper-form.component.css']
})
export class PaperFormComponent implements OnInit {
  @Input() paper: Paper;

  constructor() { }

  ngOnInit() {
    console.log(this.paper);
  }

}
