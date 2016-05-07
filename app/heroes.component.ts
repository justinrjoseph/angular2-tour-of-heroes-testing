import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.template.html',
	styleUrls: ['app/heroes.template.css'],
	directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private _heroService: HeroService, private _router: Router) {}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes() {
		this._heroService.getHeroes()
										.then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero) { this.selectedHero = hero; }

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }])
	}
}