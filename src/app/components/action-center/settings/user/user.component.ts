import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  user: any;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.user = profile;
    });
  }

}
