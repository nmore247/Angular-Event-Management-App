import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
  .nav.navbar-nav {font-size: 15px;}
  #searchForm {margin-right: 100px;}
  @media (max-width: 1200px) {#searchForm {display:none}}
  li > a.active {color: #F97924;}
  `]
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
