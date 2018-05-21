import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../models/candidate';

@Injectable()
export class CandidateService {

    private url = "http://localhost:49156/api/candidates";

    constructor(private http: HttpClient) {
    }

    getCandidates() {
        return this.http.get(this.url);
    }

    createCandidate(candidate: Candidate) {
        return this.http.post(this.url, candidate);
    }
    updateCandidate(candidate: Candidate) {

        return this.http.put(this.url + '/' + candidate.id, candidate);
    }
    deleteCandidate(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}