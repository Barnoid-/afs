import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero'
import { HeroService } from './hero.service';
import {HeroDetailComponent} from "./hero-detail.component";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    addingHero: boolean;
    selectedHero: Hero;
    error: any;

    constructor(
        private router: Router,
        private heroService: HeroService)
    { }

    getHeroes() {
        //this.heroes = this.heroService.getHeroes();
        // this.heroService.getHeroesSlowly().then(h => this.heroes = h);
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }
    
    close(hero: Hero) {
        this.addingHero = false;
        if (hero) { this.getHeroes(); }
    }

    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h=>h!==hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }
}

