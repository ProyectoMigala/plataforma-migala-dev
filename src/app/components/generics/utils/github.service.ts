import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
// CRUD

@Injectable()
export class GithubService {
    constructor(private http: HttpClient) { }

    getIssues(opts: any): Observable<any[]> {
        return this.http.get<any[]>(`https://api.github.com/repos/${opts.organization}/${opts.name}/issues`);
    }

    getEvents(opts: any): Observable<any[]> {
        return this.http.get<any[]>(`https://api.github.com/repos/${opts.organization}/${opts.name}/events`);
    }

    getContributors(opts: any): Observable<any[]> {
        return this.http.get<any[]>(`https://api.github.com/repos/${opts.organization}/${opts.name}/contributors`);
    }

    getCommitSctivity(opts: any): Observable<any[]> {
        return this.http.get<any[]>(`https://api.github.com/repos/${opts.organization}/${opts.name}/stats/commit_activity`);
    }
}