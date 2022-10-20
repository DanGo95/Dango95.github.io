import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Observable } from 'rxjs';
import { Education } from '../../interfaces/education';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations$!: Observable<Education[]>

  constructor( private portfolio: PortfolioService ) { }

  ngOnInit(): void {
    AOS.init();
    this.educations$ = this.portfolio.getEducations();
  }

}
