import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Training } from '../../interfaces/training';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  trainings$!: Observable<Training[]>;

  constructor( private portfolio: PortfolioService ) { }

  ngOnInit(): void {
    this.trainings$ = this.portfolio.getTrainings();
  }

}
