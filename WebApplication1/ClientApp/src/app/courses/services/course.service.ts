import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { courseModel } from '../models/courses.model';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';







@Injectable()
export class CourseService {

    SERVER_URL: string = "api/courses";
    constructor(private http: HttpClient) { }

    getAllCourses() {
        return this.http.get<courseModel[]>(this.SERVER_URL)
    }
    addCourse(courseModel: courseModel) {
        return this.http.post<courseModel>(this.SERVER_URL+'ff', { courseId: courseModel.courseId, courseName: courseModel.courseName, autherName: courseModel.autherName });

       // return of(courseModel);
    }
}
