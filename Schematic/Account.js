"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUser = void 0;
var AccountUser = /** @class */ (function () {
    function AccountUser(name, number, email, balance) {
        this._name = name;
        this._number = number;
        this._email = email;
        this._balance = balance;
    }
    // Function
    AccountUser.prototype.getInformation = function () {
        return [this._name, this._number, this._email, this._balance];
    };
    AccountUser.prototype.getName = function () {
        return this._name;
    };
    AccountUser.prototype.setName = function (name) {
        this._name = name;
    };
    return AccountUser;
}());
exports.AccountUser = AccountUser;
