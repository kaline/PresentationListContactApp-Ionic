import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Contacts', url: '/contact-list', icon: 'person' },
    { title: 'Mensages', url: '/mensages', icon: 'paper-plane' },
    { title: 'Favorites', url: '/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/Archived', icon: 'archive' },
    { title: 'Trash', url: '/Trash', icon: 'trash' },
    { title: 'Spam', url: '/Spam', icon: 'warning' },
    { title: 'Sign', url: '/signin', icon: 'person' },
    { title: 'SignUp', url: '/signup', icon: 'person' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

}
