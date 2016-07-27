import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
//import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';

    constructor(private http: Http) { }

    getHeroes() {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHeroesSlowly() {
        //return setTimeout(function () { this.getHeroes(); }, 1000);
        return this.getHeroes();
    }
    
    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    private handleError(error: any) {
        console.error('Cannot get data!', error);
        return Promise.reject(error.message || error);
    }
}