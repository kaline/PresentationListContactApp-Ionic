import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public username: string;

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Contacts', url: '/contact-list', icon: 'person' },
    { title: 'Mensages', url: '/mensages', icon: 'paper-plane' },
    { title: 'Favorites', url: '/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/Archived', icon: 'archive' },
    { title: 'Trash', url: '/Trash', icon: 'trash' },
    { title: 'Spam', url: '/Spam', icon: 'warning' },
    { title: 'Sign', url: '/signin', icon: 'persons' },
    { title: 'SignUp', url: '/signup', icon: 'persons' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() { }

  ngOnInit() {
    this.username = "kaline";

    

  }

}
