var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core'; ///
import { Candidate } from '../models/candidate';
import { CandidateService } from '../services/candidate.service';
var CandidateComponent = /** @class */ (function () {
    function CandidateComponent(dataService) {
        this.dataService = dataService;
        this.candidate = new Candidate();
        this.tableMode = true;
        this.filterTitle = "fullName";
    }
    Object.defineProperty(CandidateComponent.prototype, "ListTitleFilter", {
        get: function () {
            return this.listFilter;
        },
        set: function (value) {
            this.listFilter = value;
            this.filteredFullName = this.ListTitleFilter ? this.performFilter(this.ListTitleFilter) : this.candidates;
        },
        enumerable: true,
        configurable: true
    });
    CandidateComponent.prototype.ngOnInit = function () {
        this.loadCandidates();
    };
    CandidateComponent.prototype.loadCandidates = function () {
        var _this = this;
        this.dataService.getCandidates()
            .subscribe(function (data) {
            _this.candidates = data;
            _this.filteredFullName = _this.candidates;
        });
    };
    CandidateComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        if (this.filterTitle == 'fullName') {
            return this.candidates.filter(function (z) {
                return z.fullName.toLocaleLowerCase().indexOf(filterBy) !== -1;
            });
        }
        else if (this.filterTitle == 'age') {
            return this.candidates.filter(function (z) {
                return z.age.toLocaleString().indexOf(filterBy) !== -1;
            });
        }
        else if (this.filterTitle == 'salary') {
            return this.candidates.filter(function (z) {
                return z.salary.toLocaleString().indexOf(filterBy) !== -1;
            });
        }
        else if (this.filterTitle == 'experience') {
            return this.candidates.filter(function (z) {
                return z.experience.toLocaleString().indexOf(filterBy) !== -1;
            });
        }
    };
    CandidateComponent.prototype.arraySort = function () {
        if (this.titleSort == 'fullName') {
            return this.candidates.sort(function (candidateA, candidateB) {
                if (candidateA.fullName > candidateB.fullName)
                    return 1;
                if (candidateA.fullName > candidateB.fullName)
                    return 0;
                return 0;
            });
        }
        else if (this.titleSort == 'age') {
            return this.candidates.sort(function (candidateA, candidateB) {
                if (candidateA.age > candidateB.age)
                    return 1;
                if (candidateA.age > candidateB.age)
                    return 0;
                return 0;
            });
        }
        else if (this.titleSort == 'salary') {
            return this.candidates.sort(function (candidateA, candidateB) {
                if (candidateA.salary > candidateB.salary)
                    return 1;
                if (candidateA.salary > candidateB.salary)
                    return 0;
                return 0;
            });
        }
        else if (this.titleSort == 'experience') {
            return this.candidates.sort(function (candidateA, candidateB) {
                if (candidateA.experience > candidateB.experience)
                    return 1;
                if (candidateA.experience > candidateB.experience)
                    return 0;
                return 0;
            });
        }
    };
    CandidateComponent.prototype.save = function () {
        var _this = this;
        if (this.candidate.id == null) {
            this.dataService.createCandidate(this.candidate)
                .subscribe(function (data) { return _this.candidates.push(data); });
        }
        else {
            this.dataService.updateCandidate(this.candidate)
                .subscribe(function (data) { return _this.loadCandidates(); });
        }
        this.cancel();
    };
    CandidateComponent.prototype.editCandidate = function (c) {
        this.candidate = c;
    };
    CandidateComponent.prototype.cancel = function () {
        this.candidate = new Candidate();
        this.tableMode = true;
    };
    CandidateComponent.prototype.delete = function (c) {
        var _this = this;
        this.dataService.deleteCandidate(c.id)
            .subscribe(function (data) { return _this.loadCandidates(); });
    };
    CandidateComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    CandidateComponent = __decorate([
        Component({
            selector: 'candidate',
            templateUrl: './candidate.component.html',
            providers: [CandidateService]
        }),
        __metadata("design:paramtypes", [CandidateService])
    ], CandidateComponent);
    return CandidateComponent;
}());
export { CandidateComponent };
//# sourceMappingURL=candidate.component.js.map