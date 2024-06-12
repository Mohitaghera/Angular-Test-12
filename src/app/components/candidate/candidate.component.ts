import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PermissionService } from '../../services/permission.service';

@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [SidebarComponent, CommonModule, MatButtonModule],
  templateUrl: './candidate.component.html',
  styleUrl: './candidate.component.scss',
})
export class CandidateComponent implements OnInit {
  candidates: any = ['candidate-1', 'candidate-2', 'candidate-3'];
  addCandidatePermission: boolean = false;
  editCandidatePermission: boolean = false;
  viewCandidateProfilePermission: boolean = false;
  viewCandidateHistoryPermission: boolean = false;

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.checkPermissions();
  }

  checkPermissions(): void {
    this.addCandidatePermission = this.permissionService.findPermission(
      this.permissionService.data,
      'Add Candidate'
    );
    this.editCandidatePermission = this.permissionService.findPermission(
      this.permissionService.data,
      'Edit Candidate'
    );
    this.viewCandidateProfilePermission = this.permissionService.findPermission(
      this.permissionService.data,
      'View Candidate Profile'
    );
    this.viewCandidateHistoryPermission = this.permissionService.findPermission(
      this.permissionService.data,
      'View Candidate History'
    );
  }
}
