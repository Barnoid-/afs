import { Component }       from '@angular/core';
import {ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import './rxjs-extensions';

@Component({
    selector: 'my-app', 
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ HeroService ], 
    precompile: [ DashboardComponent, HeroesComponent, HeroDetailComponent ]
})

export class AppComponent {
  title = 'Tour of Heroes';
}