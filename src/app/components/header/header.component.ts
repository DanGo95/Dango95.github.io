import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @HostListener('window:scroll', ['$event'])

  // onWindowScroll() {
  //   let element = document.querySelector('.navbar') as HTMLElement;
  //   if (window.pageYOffset > element.clientHeight) {
  //     element.classList.add('navbar-bg');
  //   } else {
  //     element.classList.remove('navbar-bg');
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
