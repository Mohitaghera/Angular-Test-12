import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  links: any[] = [
    { path: 'settings', title: 'Setting', icon: 'fa-cog' },
    { path: 'permissions', title: 'Permissions', icon: 'fa-check' },
    { path: 'candidate', title: 'Candidate', icon: 'fa-user' },
    { path: 'reports', title: 'Reports', icon: 'fa-user' },
    { path: 'job', title: 'job', icon: 'fa-briefcase' },
    { path: 'hire', title: 'Hire', icon: 'fa-handshake' },
    { path: 'departments', title: 'Departments', icon: 'fa-building' },
  ];
}
