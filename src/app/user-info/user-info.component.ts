import { Component, OnInit } from '@angular/core';
import { UserinfoService } from './user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  usersData: any = [];
  isloading = false;
  error = null;
  constructor(private userinfoService: UserinfoService) { }

  ngOnInit(): void {
    this.isloading = true;
    this.userinfoService.getDataFromServer()
      .subscribe(res => {
        this.usersData = res
        this.isloading = false;
      }, error => {
        console.log(error)
        this.isloading = false;
        this.error = error.message
      })
  }
  handelError() {
    this.error = null;
  }

}
