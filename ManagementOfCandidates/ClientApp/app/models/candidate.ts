import { Data } from "@angular/router/src/config";

export class Candidate  {
    constructor(
        public id?: number,
        public fullName?: string,
        public age?: number,
        public salary?: number,
        public experience?: number,
        public path?: FormData) { }
}