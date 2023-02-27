import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class UserinfoService {
    constructor(private http: HttpClient) { }
    getDataFromServer() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');

    }
}