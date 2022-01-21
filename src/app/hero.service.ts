import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HeroesComponent } from './heroes/heroes.component';
import { Heros } from './mock-hero';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }
  getHeroes(): Observable<Hero[]>{
    const heroes = of(Heros);
    this.messageService.add('HeroService : fetchedData')
    return heroes; 
  }
}
