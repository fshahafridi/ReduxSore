"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoursesActionTypes;
(function (CoursesActionTypes) {
    CoursesActionTypes["LoadAllCourses"] = "[Course Component] LoadCourses";
    CoursesActionTypes["LoadAllCoursesSuccess"] = "[Course Component] LoadCoursesSuccess";
    CoursesActionTypes["AddCourse"] = "[Course Component] Add Course";
    CoursesActionTypes["AddCourseSuccess"] = "[Course Component] Add Course Success";
    CoursesActionTypes["AddCourseFailed"] = "[Course Component] Add Course Failed";
    CoursesActionTypes["DeleteCourse"] = "[Course Component] Delete";
    CoursesActionTypes["ShowCourses"] = "[Course Component] toggle";
    CoursesActionTypes["SetCurrentCourse"] = "[Course Component] Set Current Course";
    CoursesActionTypes["UpdateCourse"] = "[Course Component] Update Course";
})(CoursesActionTypes = exports.CoursesActionTypes || (exports.CoursesActionTypes = {}));
//////////////////Load course////////////////////
var LoadAllCourses = /** @class */ (function () {
    function LoadAllCourses() {
        this.type = CoursesActionTypes.LoadAllCourses;
    }
    return LoadAllCourses;
}());
exports.LoadAllCourses = LoadAllCourses;
var LoadAllCoursesSuccess = /** @class */ (function () {
    function LoadAllCoursesSuccess(payload) {
        this.payload = payload;
        this.type = CoursesActionTypes.LoadAllCoursesSuccess;
    }
    return LoadAllCoursesSuccess;
}());
exports.LoadAllCoursesSuccess = LoadAllCoursesSuccess;
//////////////////Add Course///////////////
var AddCourse = /** @class */ (function () {
    function AddCourse(payload) {
        this.payload = payload;
        this.type = CoursesActionTypes.AddCourse;
    }
    return AddCourse;
}());
exports.AddCourse = AddCourse;
var AddCourseSuccess = /** @class */ (function () {
    function AddCourseSuccess(payload) {
        this.payload = payload;
        this.type = CoursesActionTypes.AddCourseSuccess;
    }
    return AddCourseSuccess;
}());
exports.AddCourseSuccess = AddCourseSuccess;
var AddCourseFailed = /** @class */ (function () {
    function AddCourseFailed(errorPayload) {
        this.errorPayload = errorPayload;
        this.type = CoursesActionTypes.AddCourseFailed;
    }
    return AddCourseFailed;
}());
exports.AddCourseFailed = AddCourseFailed;
/////////////////////////////////////////
var SetCurrentCourse = /** @class */ (function () {
    function SetCurrentCourse(payload) {
        this.payload = payload;
        this.type = CoursesActionTypes.SetCurrentCourse;
    }
    return SetCurrentCourse;
}());
exports.SetCurrentCourse = SetCurrentCourse;
var UpdateCourse = /** @class */ (function () {
    function UpdateCourse(payload) {
        this.payload = payload;
        this.type = CoursesActionTypes.UpdateCourse;
    }
    return UpdateCourse;
}());
exports.UpdateCourse = UpdateCourse;
var ShowCourses = /** @class */ (function () {
    function ShowCourses(payload) {
        this.payload = payload;
        this.type = CoursesActionTypes.ShowCourses;
    }
    return ShowCourses;
}());
exports.ShowCourses = ShowCourses;
var DeleteCourse = /** @class */ (function () {
    function DeleteCourse(payload) {
        this.payload = payload;
        this.type = CoursesActionTypes.DeleteCourse;
    }
    return DeleteCourse;
}());
exports.DeleteCourse = DeleteCourse;
//# sourceMappingURL=actions.js.map