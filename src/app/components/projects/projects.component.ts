import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() stopLoading = new EventEmitter<{ loading: boolean }>();

  projects$!: Observable<Project[]>;

  constructor( private portfolio: PortfolioService ) { }

  ngOnInit(): void {
    AOS.init();
    this.projects$ = this.portfolio.getProjects();
    this.projects$.subscribe(res => this.stopLoading.emit({ loading: false }));
  }

}
