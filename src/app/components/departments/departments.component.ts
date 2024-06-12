import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PermissionService } from '../../services/permission.service';


@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [SidebarComponent,CommonModule,MatButtonModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {

  departments : any = ['department-1','department-2','department-3']

  viewDepartmentPermission: boolean = false;
  manageDepartmentPermission: boolean = false;


  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.checkPermissions();
  }

  checkPermissions(): void {
    this.viewDepartmentPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'View Departments'
    );
    this.manageDepartmentPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'Manage Departments'
    );
  }


}
