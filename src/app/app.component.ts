import { Component, OnInit } from '@angular/core';
import { PAPER } from './paper-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  //variables
  title: string = 'Paper Editor';
  isCollapsed: boolean;

  ngOnInit() {
    this.isCollapsed = true;
  }

  //methods
  private onCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
