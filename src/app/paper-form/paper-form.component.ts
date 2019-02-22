import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paper } from '../model/paper';

@Component({
  selector: 'app-paper-form',
  templateUrl: './paper-form.component.html',
  styleUrls: ['./paper-form.component.css']
})
export class PaperFormComponent implements OnInit {
  @Output() resetForm: EventEmitter<any> = new EventEmitter();
  @Input() paper: Paper;


  constructor() { }

  ngOnInit() {
    console.log(this.paper);

    if(window.localStorage){
      console.log('tem');
    }
  }

  resetFormClicked(): void {
    this.resetForm.emit();
  }

}
