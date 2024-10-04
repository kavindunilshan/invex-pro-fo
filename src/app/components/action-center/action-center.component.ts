import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-action-center',
  templateUrl: './action-center.component.html',
  styleUrl: './action-center.component.css'
})
export class ActionCenterComponent implements OnInit {
  isSidebarExpanded = true;

  constructor(public auth: AuthService, private router: Router) { }

  toggle(isExpanded: boolean) {
    this.isSidebarExpanded = isExpanded;
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigate(['/']);
      }
    });
  }

}
