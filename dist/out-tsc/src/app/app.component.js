import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'StudentOnboarding';
        this.studentForm = new FormGroup({
            studentName: new FormControl(''),
            dob: new FormControl(''),
            fatherName: new FormControl(''),
            motherName: new FormControl(''),
            lastClassScore: new FormControl('')
        });
    }
    AppComponent.prototype.onSubmit = function () {
        // TODO: Use EventEmitter with form value
        console.warn(this.studentForm.value);
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map