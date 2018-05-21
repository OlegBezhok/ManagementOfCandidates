import { NgForm, FormBuilder} from '@angular/forms';///
import { Component, OnInit } from '@angular/core';///
import { Router } from '@angular/router';

import { Candidate } from '../models/candidate';
import { CandidateService } from '../services/candidate.service';


@Component({
    selector: 'candidate',
    templateUrl: './candidate.component.html',
    providers: [CandidateService]
})
export class CandidateComponent implements OnInit {

    candidate: Candidate = new Candidate();   
    candidates: Candidate[];               
    tableMode: boolean = true;          
    filterTitle: string;
    titleSort: string;
    listFilter: string;

    get ListTitleFilter(): string {
        return this.listFilter;
    }
    set ListTitleFilter(value: string) {
        this.listFilter = value;
        this.filteredFullName = this.ListTitleFilter ? this.performFilter(this.ListTitleFilter) : this.candidates;
    }

    filteredFullName: Candidate[];

    constructor(private dataService: CandidateService)
    {
        this.filterTitle = "fullName";
    }

    ngOnInit() {
        this.loadCandidates();    
    }

    loadCandidates() {
        this.dataService.getCandidates()
            .subscribe((data: Candidate[]) => {
                this.candidates = data;
                this.filteredFullName = this.candidates;
            });
    }

    performFilter(filterBy: string): Candidate[] {
        filterBy = filterBy.toLocaleLowerCase();
        if (this.filterTitle == 'fullName')
        {
            return this.candidates.filter((z: Candidate) =>
                z.fullName.toLocaleLowerCase().indexOf(filterBy) !== -1)
        }
        else if (this.filterTitle == 'age') {
            return this.candidates.filter((z: Candidate) =>
                z.age.toLocaleString().indexOf(filterBy) !== -1)
        }
        else if (this.filterTitle == 'salary') {
            return this.candidates.filter((z: Candidate) =>
                z.salary.toLocaleString().indexOf(filterBy) !== -1)
        }
        else if (this.filterTitle == 'experience') {
            return this.candidates.filter((z: Candidate) =>
                z.experience.toLocaleString().indexOf(filterBy) !== -1)
        }
    }

    arraySort() : Candidate[] {
        if (this.titleSort == 'fullName') {
            return this.candidates.sort((candidateA: Candidate, candidateB: Candidate) => {
                if (candidateA.fullName > candidateB.fullName) return 1;
                if (candidateA.fullName > candidateB.fullName) return 0;
                return 0;
            })
        }
        else if (this.titleSort == 'age') {
            return this.candidates.sort((candidateA: Candidate, candidateB: Candidate) => {
                if (candidateA.age > candidateB.age) return 1;
                if (candidateA.age > candidateB.age) return 0;
                return 0;
            })
        }
        else if (this.titleSort == 'salary') {
            return this.candidates.sort((candidateA: Candidate, candidateB: Candidate) => {
                if (candidateA.salary > candidateB.salary) return 1;
                if (candidateA.salary > candidateB.salary) return 0;
                return 0;
            })
        }
        else if (this.titleSort == 'experience') {
            return this.candidates.sort((candidateA: Candidate, candidateB: Candidate) => {
                if (candidateA.experience > candidateB.experience) return 1;
                if (candidateA.experience > candidateB.experience) return 0;
                return 0;
            })
        }
    }

    save() {
        if (this.candidate.id == null) {
            this.dataService.createCandidate(this.candidate)
                .subscribe((data: Candidate) => this.candidates.push(data));
        } else {
            this.dataService.updateCandidate(this.candidate)
                .subscribe(data => this.loadCandidates());
        }
        this.cancel();
    }
    editCandidate(c: Candidate) {
        this.candidate = c;
    }
    cancel() {
        this.candidate = new Candidate();
        this.tableMode = true;
    }
    delete(c: Candidate) {
        this.dataService.deleteCandidate(c.id)
            .subscribe(data => this.loadCandidates());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}