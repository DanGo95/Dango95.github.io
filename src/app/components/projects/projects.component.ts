import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Observable } from 'rxjs';
import { Project } from '../../interfaces/project';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects$!: Observable<Project[]>;

  constructor( private portfolio: PortfolioService ) { }

  ngOnInit(): void {
    AOS.init();
    this.projects$ = this.portfolio.getProjects();
  }

}
