import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(){
    //fazer uma http rerquest an return to screen

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
