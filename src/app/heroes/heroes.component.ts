import { Component, OnInit ,Input} from '@angular/core';
import {Hero} from '../Hero'
import { Heros } from '../mock-hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[] = [];
 // heroes=Heros
  selectedHero!: Hero;

  constructor(private heroservice: HeroService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onClick(hero:Hero){
    this.selectedHero=hero
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`)

  }
  getHeroes(){
    this.heroservice.getHeroes().subscribe(heroes => this.heroes=heroes)
  }
  add(name:string){
    name=name.trim();
    if(!name){return;}
    this.heroservice.addHero({name} as Hero).subscribe((hero: Hero)=>this.heroes.push(hero))

  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroservice.deleteHero(hero.id).subscribe();
  }

}
