import { Component, OnInit } from '@angular/core';
import { PAPER } from './../paper-mock';
import { Paper } from './../model/paper';

@Component({
  selector: 'app-paper-editor',
  templateUrl: './paper-editor.component.html',
  styleUrls: ['./paper-editor.component.css']
})
export class PaperEditorComponent implements OnInit {
  //variables
  paper: Paper;
  storageKey: string;

  constructor() { }

  ngOnInit() {
    this.storageKey = 'key1';
    localStorage.setItem(this.storageKey, JSON.stringify(PAPER));
    this.paper = JSON.parse(localStorage.getItem(this.storageKey)) || new Paper();
  }

  //methods
  //resets paper to localStorage state
  private resetForm(): void {
    this.paper = JSON.parse(localStorage.getItem(this.storageKey)) || new Paper();
  }

  //saves paper's state to localStorage
  private saveForm(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.paper));
  }
}
