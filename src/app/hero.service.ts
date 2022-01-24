import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HeroesComponent } from './heroes/heroes.component';
import { Heros } from './mock-hero';
import { Observable,of, pipe } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,map,tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url='api/heroes'
  httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})} 
  constructor(private http:HttpClient,private messageService:MessageService) { }
  private log(message:string){
    this.messageService.add(`HeroService : ${message}`)
  }
  getHeroes(): Observable<Hero[]>{
    // const heroes = of(Heros);
    
    return this.http.get<Hero[]>(this.url)
    .pipe(
      tap(_=>this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))

    )
  }
  private handleError<T>(operation ='operation',result?:T){
    return(error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed : ${error.message}`);
      return of(result as T)
    };
  }
  getHero(id:number): Observable<Hero>{
    const url=`${this.url}/${id}`;
    return this.http.get<Hero>(url).pipe(                                                     //http get method 
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
    // const hero = Heros.find(h=>h.id===id)!;
    // this.messageService.add(`HeroService : fetched hero id = ${id}`)
    // return of(hero); 
  }
  updateHero(hero:Hero):Observable<any>{
    return this.http.put(this.url, hero, this.httpOptions).pipe(                                                     
      tap(_ => this.log(`Updated hero id=${hero.id}`)),
      catchError(this.handleError<Hero>(`updateHero`))
    );                                            //http put method
  }
  addHero(hero:Hero):Observable<Hero>{
    return this.http.post<Hero>(this.url, hero, this.httpOptions).pipe(                                                     
      tap((newHero:Hero) => this.log(`Added hero with  id=${newHero.id}`)),
      catchError(this.handleError<Hero>(`addHero`))
    );                                            //http post method
  }
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.url}/${id}`;
  
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
}
