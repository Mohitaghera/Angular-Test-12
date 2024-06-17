import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { PermissionService } from '../../services/permission.service';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Permission } from '../../models/permission/permission.model';

@Component({
  selector: 'app-permission',
  standalone: true,
  imports: [
    SidebarComponent,
    CdkAccordionModule,
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.scss',
})
export class PermissionComponent implements OnInit {
  expandedIndex = 0;
  data!: Permission[];
  originalData: Permission[] = [];

  selectAll!: boolean;
  nestedAccordionStates: boolean[][] = [];

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.selectAll = this.permissionService.selectAll;

    this.permissionService.getData().subscribe((data: any) => {
      this.originalData = data;

      this.permissionService.data.forEach((item: any, index: any) => {
        this.nestedAccordionStates[index] = [];
        item.permissions.forEach((action: any, subIndex: any) => {
          this.nestedAccordionStates[index][subIndex] = false;
        });
      });
      this.data = this.permissionService.data;
    });
  }

  setDefault() {
    this.data = this.originalData;
    this.permissionService.data = this.originalData;
    this.permissionService.selectAll = true;
    this.selectAll = this.permissionService.selectAll;

    this.permissionService.data.forEach((item: any, index: any) => {
      this.nestedAccordionStates[index] = [];
      item.permissions.forEach((action: any, subIndex: any) => {
        this.nestedAccordionStates[index][subIndex] = false;
      });
    });
  }

  toggleSelectAll() {
    this.permissionService.data.forEach((item: any) => {
      if (!item.isDisable) {
        item.value = this.permissionService.selectAll;
      }
      this.updateNestedPermissions(item, this.permissionService.selectAll);
    });
    this.data = this.permissionService.data;
    this.permissionService.selectAll = !this.permissionService.selectAll;
    this.selectAll = this.permissionService.selectAll;
  }

  toggleNestedAccordion(index: number, subIndex: number) {
    this.nestedAccordionStates[index][subIndex] =
      !this.nestedAccordionStates[index][subIndex];
  }

  onPermissionChange(item: any, action?: any) {
    if (action) {
      this.updateNestedPermissions(action, action.value);
    } else {
      this.updateNestedPermissions(item, item.value);
    }
  }

  updateNestedPermissions(permission: any, value: boolean) {
    if (permission.permissions) {
      permission.permissions.forEach((subPermission: any) => {
        if (!subPermission.isDisable) {
          subPermission.value = value;
          this.updateNestedPermissions(subPermission, value);
        }
      });
    }
  }
}
