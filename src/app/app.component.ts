import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'save-money-app';

  income = 0;
  outcome = 0;


  ngOnInit(): void {

  }

  setIncome(event: KeyboardEvent){
    this.income = +(event.target as HTMLInputElement).value;
  }

  setOutcome(event: KeyboardEvent){
    this.outcome = +(event.target as HTMLInputElement).value;
  }
}
