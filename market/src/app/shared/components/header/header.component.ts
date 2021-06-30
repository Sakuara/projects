import { Component, OnInit } from '@angular/core';
import { authNav, navItems } from './config';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    navItems:Array<{name:string,link:string}> = [];
    authNav:Array<{name:string,link:string}> = [];
    constructor() { }

    ngOnInit(): void { 
        this.navItems = navItems;
        this.authNav = authNav;
    }
}
