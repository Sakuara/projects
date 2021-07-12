import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { JwtService } from '../core';
import { UserService } from './user.service';

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit,OnDestroy {
    form!: FormGroup;
    private destroy$ = new Subject();
    constructor(
        private fb: FormBuilder,
        private _snakbar: MatSnackBar,
        private userService: UserService,
        private jwtService: JwtService,
        private router: Router
    ) { }
    
    ngOnInit() {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
    
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onSubmit(){
        this.userService.login(this.form.value).subscribe(res => {
            console.log(res.data);
            if(!res.code){
                this.jwtService.saveToken(res.data.token);
                this.router.navigate(['/home']);
                this._snakbar.open('登录成功','',{
                    duration: 3000,
                    horizontalPosition: 'right',
                    verticalPosition: 'top'
                });
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