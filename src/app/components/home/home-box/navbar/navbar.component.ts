import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  user$: Observable<any> | undefined;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      console.log('Is Authenticated:', isAuthenticated);
    });

    this.user$ = this.auth.user$;

    this.auth.user$.subscribe(token => {
      console.log('Id Token:', token);
    });
  }

}
