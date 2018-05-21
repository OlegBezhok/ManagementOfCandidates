var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityUser } from '../models/register';
import { RegisterService } from '../services/register.service';
//import { OnInit } from '@angular/core';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.user = new IdentityUser();
    }
    RegisterComponent.prototype.registrationUser = function () {
        var _this = this;
        this.registerService.createUser(this.user)
            .subscribe(function (data) { return _this.users.push(data); });
        this.router.navigate(["listCandidate"]);
    };
    RegisterComponent = __decorate([
        Component({
            selector: 'register',
            templateUrl: './register.component.html',
            providers: [RegisterService]
        }),
        __metadata("design:paramtypes", [RegisterService, Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map