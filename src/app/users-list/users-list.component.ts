import { Component, OnInit } from '@angular/core';

import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.usersService
      .getUsers()
      .subscribe((results) => {
        console.log(results);
        this.users = results;
      });
  }

  deleteUser(event, id) {
    event.stopPropagation();
    this.usersService
      .deleteUser(id)
      .subscribe((results) => {
        console.log(results);
      });
  }

  postUser(name: string, surname: string, email: string, age: number, gender: string) {
    if (name && surname && email && age && gender) {
      this.usersService
        .postUser({
          "name": name,
          "surname": surname,
          "email": email,
          "age": age,
          "gender": gender,
          "picture": "http://www.hojotasamano.com/wp-content/uploads/2014/10/icono-perfil-azul.png"
        })
        .subscribe((results) => {
          console.log(results);
        });
    }
  }

}
