import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PermissionService } from '../../services/permission.service';

@Component({
  selector: 'app-hire',
  standalone: true,
  imports: [SidebarComponent, CommonModule, MatButtonModule],
  templateUrl: './hire.component.html',
  styleUrl: './hire.component.scss',
})
export class HireComponent {
  
  createJobOpeningPermission: boolean = false;
  reviewApplicationsPermission: boolean = false;


  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.checkPermissions();
  }

  checkPermissions(): void {
    this.createJobOpeningPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'Create Job Opening'
    );
    this.reviewApplicationsPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'Review Applications'
    );
  }


}
