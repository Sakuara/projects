import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    form!: FormGroup;
    constructor(
        private fb: FormBuilder,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    onSubmit(){
        this.userService.createUser(this.form.value).subscribe(res => {
            console.log(res.data);
            if(!res.code){
                console.log(res.data);
            }else{
                alert(res.message);
            }
        })
    }

    queryUsers(): void {
        this.userService.getUserList().subscribe(res => {
            console.log(res.data);
        })
    }

    createUser(): void {
        let params = {
            username: 'kavi',
            password: '123456'
        }
        this.userService.createUser(params).subscribe(res => {
            console.log(res.data);
        })
    }
}