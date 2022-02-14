import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items=[{}, {}];

  constructor( private userService: UserService) {
   this.items = this.userService.simulateData();
  }

  ngOnInit() {

  }

}
