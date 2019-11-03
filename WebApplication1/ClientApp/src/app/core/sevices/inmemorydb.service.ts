import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class DbService implements InMemoryDbService {

    createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
        let courses = [
            { courseId: 1, courseName: 'PO1', autherName: 'Auth0r Name1' },
            { courseId: 2, courseName: 'PO2', autherName: 'Auth0r Name1' },
            { courseId: 3, courseName: 'PO3', autherName: 'Auth0r Name1' },
            { courseId: 4, courseName: 'PO4', autherName: 'Auth0r Name1' }
        ];

        return { courses: courses };
    }

    constructor() { }
    
}
