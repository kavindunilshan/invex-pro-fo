import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Output() toggleSidebar = new EventEmitter<boolean>();
  isSidebarExpanded = false;

  toggleSidebarMenu() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.toggleSidebar.emit(this.isSidebarExpanded);
  }
}
