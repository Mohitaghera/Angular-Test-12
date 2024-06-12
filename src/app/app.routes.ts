import { Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { PermissionComponent } from './components/permission/permission.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HireComponent } from './components/hire/hire.component';
import { JobComponent } from './components/job/job.component';
import { DepartmentsComponent } from './components/departments/departments.component';

export const routes: Routes = [
  {path:'',redirectTo:'permissions',pathMatch:'full'},
  {path:'settings',component:SettingsComponent},
  {path:'permissions',component:PermissionComponent},
  {path:'candidate',component:CandidateComponent},
  {path:'reports',component:ReportsComponent},
  {path:'job',component:JobComponent},
  {path:'hire',component:HireComponent},
  {path:'departments',component:DepartmentsComponent},

];
