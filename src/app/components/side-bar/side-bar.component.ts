import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  isExpanded = true;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

}
