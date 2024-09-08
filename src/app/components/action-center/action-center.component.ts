import { Component } from '@angular/core';

@Component({
  selector: 'app-action-center',
  templateUrl: './action-center.component.html',
  styleUrl: './action-center.component.css'
})
export class ActionCenterComponent {
  isSidebarExpanded = true;

  toggle(isExpanded: boolean) {
    console.log("Calling here", isExpanded);
    this.isSidebarExpanded = isExpanded;
  }

}
