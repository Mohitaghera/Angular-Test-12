import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PermissionService } from '../../services/permission.service';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [SidebarComponent, CommonModule, MatButtonModule],
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  jobs: any = ['Job-1', 'Job-2', 'Job-3'];
  addJobPermission: boolean = false;
  editJobPermission: boolean = false;
  viewJobDetailsPermission: boolean = false;
  viewJobApplicantsPermission: boolean = false;

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    console.log(this.permissionService.data);

    this.checkPermissions();
  }

  checkPermissions(): void {
    this.addJobPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'Add Job'
    );
    this.editJobPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'Edit Job'
    );
    this.viewJobDetailsPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'View Job Details'
    );
    this.viewJobApplicantsPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'View Applicants'
    );
  }
}
