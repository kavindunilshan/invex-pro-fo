import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InvexPro-fo';

  tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone Number' },
    { key: 'role', label: 'Role' }
  ];

  tableData = [
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com', phone: '+1234567890', role: 'Admin' },
    { id: 2, name: 'Jane Doe', age: 28, email: 'jane.doe@example.com', phone: '+1234567891', role: 'Manager' },
    { id: 3, name: 'Jim Doe', age: 22, email: 'jim.doe@example.com', phone: '+1234567892', role: 'Developer' },
    { id: 4, name: 'Jake Doe', age: 30, email: 'jake.doe@example.com', phone: '+1234567893', role: 'Designer' },
    { id: 5, name: 'Julie Doe', age: 27, email: 'julie.doe@example.com', phone: '+1234567894', role: 'Support' }
  ];

}
