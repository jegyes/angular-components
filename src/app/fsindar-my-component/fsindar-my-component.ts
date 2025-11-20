import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SwPlanetsService } from '../sw-planets.service';

@Component({
	selector: 'app-fsindar-my-component',
	imports: [MatListModule, MatCardModule],
	templateUrl: './fsindar-my-component.html',
	styleUrl: './fsindar-my-component.css',
})
export class FsindarMyComponent {
	planetsWithoutHumans = [
		{
			name: 'Hoth',
			description:
				'An icy, uninhabitable world with no intelligent life; only creatures like wampas and tauntauns.',
		},
		{
			name: 'Dagobah',
			description:
				'Swamp planet filled with creatures but no known civilization; Yoda lived there in exile.',
		},
		{
			name: 'Endor',
			description: 'Forest moon inhabited by Ewoks; no human civilization.',
		},
	];

	// Inject the service.
	private planetSvc = inject(SwPlanetsService);

	// Use the service to load planets
	// And filter and map to the one's you want
	protected readonly planetsToDisplay = this.planetSvc
		.getPlanetFilmDataForDisplay()
		.filter((x) => this.planetsWithoutHumans.map((y) => y.name).includes(x.name))
		.map((x) => ({
			name: x.name,
			description: this.planetsWithoutHumans.find((y) => y.name === x.name)?.description,
		}));
}
