import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PermissionService } from '../../services/permission.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [SidebarComponent, CommonModule, MatButtonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  settings: any = ['setting-1', 'setting-2', 'setting-3'];

  viewLogsPermission: boolean = false;
  manageSettingsPermission: boolean = false;

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.checkPermissions();
  }

  checkPermissions(): void {
    this.viewLogsPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'View Logs'
    );
    this.manageSettingsPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'Manage Settings'
    );
  }
}
