import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';

import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

@RouteConfig([
	{ path: '/heroes', name: 'Heroes', component: HeroesComponent },
	{ path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
	{ path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true }
])

@Component({
	selector: 'my-app',
	template: `
		<h1>{{ title }}</h1>
		<nav>
			<a [routerLink]="['Dashboard']">Dashboard</a>	
			<a [routerLink]="['Heroes']">Heroes</a>	
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app/app.template.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, HeroService]
})
export class AppComponent {
	title = 'Tour of Heroes';
}