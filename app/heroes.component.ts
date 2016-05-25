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
	addingHero = false;
	error: any;

	constructor(private _heroService: HeroService, private _router: Router) {}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes() {
		this._heroService
				.getHeroes()
				.then(heroes => this.heroes = heroes)
				.catch(error => this.error = error); // TODO: Display error message
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
		this.addingHero = false;
	}

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }])
	}

	close(savedHero: Hero) {
		this.addingHero = false;
		if ( savedHero ) { this.getHeroes(); }
	}

	addHero() {
		this.addingHero = true;
		this.selectedHero = null;
	}

	delete(hero: Hero, event: any) {
		event.stopPropagation();

		this._heroService
				.delete(hero)
				.then(res => {
					this.heroes = this.heroes.filter(h => h !== hero);
					if ( this.selectedHero === hero ) { this.selectedHero = null; }
				})
				.catch(error => this.error = error); // TODO: Display error message
	}
}