import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { UsersService } from './../services/users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public user;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    const id = this.route.snapshot.paramMap.get('id');

    this.usersService
      .getUser(id)
      .subscribe((results) => {
        console.log(results);
        this.user = results;
      });
  }

  putUser(user) {
    this.usersService
      .putUser(user)
      .subscribe((results) => {
        console.log(results);
      });
  }

  goBack() {
    this.location.back();
  }

}
