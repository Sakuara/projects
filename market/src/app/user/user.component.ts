import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  queryUsers(): void {
    this.userService.getUserList().subscribe(res => {
      console.log(res.data);
    })
  }

  createUser(): void{
    let params = {
      username: 'kavi',
      password: '123456'
    }
    this.userService.createUser(params).subscribe(res => {
      console.log(res.data);
    })
  }

}
