import { Component } from '@angular/core';
import { PAPER } from './paper-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paper = PAPER;
  title = 'paper-title-private';
}
