import { Component, OnInit } from '@angular/core';
import { UserinfoService } from './user-info/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentDate: any;
  constructor() {
    this.currentDate = new Date;
  }
  ngOnInit(): void {

  }

}
