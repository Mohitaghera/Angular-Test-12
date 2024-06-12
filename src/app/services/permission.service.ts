import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Permission } from '../models/permission/permission.model';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  data: Permission[] = [];
  originalData: Permission[] = [];
  selectAll: boolean = true;

  constructor(private http: HttpClient) {
    this.getData().subscribe((data: any) => {
      this.data = data;
      this.originalData = data;
    });
  }

  getData() {
    return this.http.get('../../assets/data.json').pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.message);
      })
    );
  }

  findPermission(permissions: Permission[], permissionName: string): boolean {
    for (let permission of permissions) {
      if (permission.name === permissionName) {
        return permission.value;
      }
      if (permission.permissions) {
        for (let subPermission of permission.permissions) {
          console.log(subPermission);

          if (subPermission.name === permissionName) {
            return subPermission.value;
          }

          if (subPermission.permissions) {
            for (let per of subPermission.permissions) {
              if (per.name === permissionName) {
                return per.value;
              }
            }
          }
        }
      }
    }
    return false;
  }
}
