import { NgForm, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IdentityUser } from '../models/register';
import { RegisterService } from '../services/register.service';
//import { OnInit } from '@angular/core';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [RegisterService]
})

export class RegisterComponent {
    user: IdentityUser = new IdentityUser();
    users: IdentityUser[];

    constructor(private registerService: RegisterService, private router: Router  )
    {
    }

    registrationUser() {
        this.registerService.createUser(this.user)
            .subscribe((data: IdentityUser) => this.users.push(data));

        this.router.navigate(["listCandidate"]);

    }
}