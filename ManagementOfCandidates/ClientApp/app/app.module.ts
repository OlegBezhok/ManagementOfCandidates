import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/index';
import { RegisterComponent } from './register/index';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { RegisterService } from './services/register.service';

const appRoutes: Routes = [
    { path: '', component: CandidateComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'listCandidate', component: CandidateComponent },
    { path: '**', component: CandidateComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, CandidateComponent, RegisterComponent, AppNavbarComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

