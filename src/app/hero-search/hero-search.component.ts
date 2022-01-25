import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchInput = new Subject<string>();

  constructor(private heroService: HeroService) { }
  

  ngOnInit(): void {
    this.heroes$ = this.searchInput.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name: string) => this.heroService.searchHeroes(name))
    )
  }

  search(name: string): void {
    this.searchInput.next(name);
  }

}
