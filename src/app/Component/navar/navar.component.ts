import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.css']
})
export class NavarComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: any = {};

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    // this.isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    // const userData = localStorage.getItem('user');
    // if (userData) {
    //   this.user = JSON.parse(userData);
    // }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  onLogout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }


}


