import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IdentityUser } from '../models/register';


@Injectable()
export class RegisterService {
    private url = "/api/Accounts";

    constructor(private http: HttpClient) { }

    createUser(user: IdentityUser) {
        return this.http.post(this.url, user);
    }
}