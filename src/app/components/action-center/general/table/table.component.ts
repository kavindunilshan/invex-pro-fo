import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() columns: Array<{ key: string, label: string }> = [];
  @Input() data: Array<any> = [];
}
