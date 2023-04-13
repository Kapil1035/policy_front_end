import { Router, NavigationStart } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent implements OnInit {
currentUser = null;
constructor(
    private router: Router
){}
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['../../']);
  }
  redirectToCases(){
    this.router.navigate(['/', 'users','cases']);
  }
  redirectToHome(){
    this.router.navigate(['/', 'users']);
  }
}
