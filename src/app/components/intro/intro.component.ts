import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  loading = true;

  constructor() { }

  ngOnInit(): void {
    console.log(this.loading);
  }

  stopLoading( eventData: { loading: boolean } ) {
    this.loading = eventData.loading;
    console.log(this.loading);
  }

}
