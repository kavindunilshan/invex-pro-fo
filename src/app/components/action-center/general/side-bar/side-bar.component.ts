import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  @Input() isExpanded = true;

  selectedItem: string | null = null;

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.scrollToTop();
  }

}
