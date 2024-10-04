import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-box',
  templateUrl: './home-box.component.html',
  styleUrl: './home-box.component.css'
})
export class HomeBoxComponent {

  constructor(private router: Router) {}

  navigateToActionCenter() {
    this.router.navigate(['/action-center/dashboard']);
  }



}
