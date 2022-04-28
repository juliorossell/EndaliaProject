import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, switchMap, tap } from 'rxjs';
import { IUserInfo } from 'src/app/shared/interfaces/user-info';
import { SecurityService } from 'src/app/shared/services/micro-services/security-service';

@Component({
  selector: 'app-rrhh',
  templateUrl: './rrhh.component.html',
  styleUrls: ['./rrhh.component.scss']
})
export class RrhhComponent implements OnInit {
  userList: IUserInfo[] = [];
  searchUserForm!: FormGroup;
  constructor(
    private securityService: SecurityService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.watchChangesSearchInput();
    this.loadUsers();
  }

  private createForm(){
    this.searchUserForm = this.fb.group({
      searchInput: [null, null]
    })
  }

  watchChangesSearchInput() {
    this.searchUserForm.get('searchInput')
      ?.valueChanges
      .pipe(
        debounceTime(150),
        switchMap(res =>
          this.securityService.filterByTerm(res)
            .pipe(
              tap((res: any) =>  this.userList = res.body),
            )
        )
      )
      .subscribe();
  }

  private loadUsers()  {
    this.securityService.getUsers()
      .pipe(
        tap((res: any) =>  this.userList = res.body),
      )
      .subscribe();
  }


}
