import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] =[
      {
          id:1,
          name:'Sam'
      
      },
      {id:2,name:'James'},
      {id:3,name:'Thomas'},
      {id:4,name:'Henry'},
      {id:5,name:'Andrew'}
  
  ]
  return {heroes}

      
  }
  genId(heroes:Hero[]):number{
    return heroes.length>0 ? Math.max(...heroes.map(hero=>hero.id)) + 1 : 1;
  }

  constructor() { }
}
