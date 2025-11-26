import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-jegyes-add-two-numbers',
	imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule],
	templateUrl: './jegyes-add-two-numbers.html',
	styleUrl: './jegyes-add-two-numbers.css',
})
export class jegyesAddTwoNumbers {
	protected readonly numberOne = signal(2);
	protected readonly numberTwo = signal(2);
	protected readonly answer = signal(4);

	protected readonly updateNumberOne = (newNumber: number) =>
		this.numberOne.update((prev) => newNumber);

	protected readonly addNumbers = () => {
		console.log('user pressed equal button');
		this.answer.update((prev) => this.numberOne() + this.numberTwo());
	};
}

// style-inspiration by "Snap-Up Styles"
