import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PermissionService } from '../../services/permission.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [SidebarComponent, CommonModule, MatButtonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {
  reports: any = ['Report-1', 'Report-2', 'Report-3'];

  
  generateReportsPermission: boolean = false;
  ExportReportsPermission: boolean = false;


  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.checkPermissions();
  }

  checkPermissions(): void {
    this.generateReportsPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'Generate Reports'
    );
    this.ExportReportsPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'Export Reports'
    );
  }

}
