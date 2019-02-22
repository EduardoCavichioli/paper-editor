import { Component, OnInit } from '@angular/core';
import { PAPER } from './../paper-mock';
import { Paper } from './../model/paper';

@Component({
  selector: 'app-paper-editor',
  templateUrl: './paper-editor.component.html',
  styleUrls: ['./paper-editor.component.css']
})
export class PaperEditorComponent implements OnInit {
  paper: Paper;
  storageKey: string;

  constructor() { }

  ngOnInit() {
    this.storageKey = 'key1';
    localStorage.setItem(this.storageKey, JSON.stringify(PAPER));
    this.paper = JSON.parse(localStorage.getItem(this.storageKey)) || new Paper();
    
  }

  resetForm() {
    this.paper = JSON.parse(localStorage.getItem(this.storageKey)) || new Paper();
  }

  saveForm() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.paper));
  }
}
