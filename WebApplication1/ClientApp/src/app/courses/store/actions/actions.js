"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoursesActionTypes;
(function (CoursesActionTypes) {
    CoursesActionTypes["LoadAllCourses"] = "[Course Component] LoadCourses";
    CoursesActionTypes["LoadAllCoursesSuccess"] = "[Course Component] LoadCoursesSuccess";
    CoursesActionTypes["AddCourse"] = "[Course Component] Add Course";
    CoursesActionTypes["DeleteCourse"] = "[Course Component] Delete";
    CoursesActionTypes["ShowCourses"] = "[Course Component] toggle";
    CoursesActionTypes["SetCurrentCourse"] = "[Course Component] Set Current Course";
    CoursesActionTypes["UpdateCourse"] = "[Course Component] Update Course";
})(CoursesActionTypes = exports.CoursesActionTypes || (exports.CoursesActionTypes = {}));
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
var ShowCourses = /** @class */ (function () {
    function ShowCourses(payload) {
        this.payload = payload;
        this.type = CoursesActionTypes.ShowCourses;
    }
    return ShowCourses;
}());
exports.ShowCourses = ShowCourses;
var AddCourse = /** @class */ (function () {
    function AddCourse(payload) {
        this.payload = payload;
        this.type = CoursesActionTypes.AddCourse;
    }
    return AddCourse;
}());
exports.AddCourse = AddCourse;
var DeleteCourse = /** @class */ (function () {
    function DeleteCourse(payload) {
        this.payload = payload;
        this.type = CoursesActionTypes.DeleteCourse;
    }
    return DeleteCourse;
}());
exports.DeleteCourse = DeleteCourse;
//# sourceMappingURL=actions.js.map