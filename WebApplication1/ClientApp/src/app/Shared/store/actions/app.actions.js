"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SharedActionTypes;
(function (SharedActionTypes) {
    SharedActionTypes["ChangeUserName"] = "[Header Component] ChangeUserName";
})(SharedActionTypes = exports.SharedActionTypes || (exports.SharedActionTypes = {}));
var ChangeUserName = /** @class */ (function () {
    function ChangeUserName(payload) {
        this.payload = payload;
        this.type = SharedActionTypes.ChangeUserName;
    }
    return ChangeUserName;
}());
exports.ChangeUserName = ChangeUserName;
//# sourceMappingURL=app.actions.js.map