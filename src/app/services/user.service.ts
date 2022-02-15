import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  films: any;

  constructor(public httpClient: HttpClient) { }

  getUsers(){
    //fazer uma http rerquest an return to screen
    this.films = this.httpClient.get('https://swapi.co/api/films');
    this.films
    .subscribe(data => {
      console.log('my data: ', data);
    });
  }

  simulateData(){
    const iitems = [];
    for(let index = 0; index < 5; index++) {
      const element = {
        user: 'user ' + index,
        text: 'teste ' + index,
        foto: 'https://picsum.photos/400/800?random=' + index,
      };
      iitems.push(element);
    }
    return iitems;
  }
}
