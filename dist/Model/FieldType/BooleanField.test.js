"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var validate_js_1 = require("validate.js");
var faker_1 = require("faker");
var BooleanField_1 = require("./BooleanField");
var _a = intern.getPlugin("interface.bdd"), describe = _a.describe, it = _a.it;
var expect = intern.getPlugin("chai").expect;
describe("FieldType: BooleanField", function () {
    it("has correct default value", function () {
        expect(BooleanField_1.BooleanField).to.have.property("defaultValue").to.deep.equal(false);
    });
    it("provides default form validation rules which require the value to be an boolean", function () {
        var value = false;
        expect(validate_js_1.validate({ student: value }, { student: BooleanField_1.BooleanField.defaultValidationRules })).to.be.undefined;
    });
    it("provides default form validation rules which do not allow non-null non-boolean types", function () {
        var value = 7;
        expect(validate_js_1.validate({ student: value }, { student: BooleanField_1.BooleanField.defaultValidationRules })).to.deep.equal({
            student: ["Student must be of type boolean"],
        });
    });
    it("considers null to be a valid type", function () {
        var value = null;
        expect(BooleanField_1.BooleanField.isValidType(value)).to.be.true;
    });
    it("considers an boolean instance to be a valid type", function () {
        var value = false;
        expect(BooleanField_1.BooleanField.isValidType(value)).to.be.true;
    });
    it("does not consider a non-null non-boolean instance to be a valid type", function () {
        var value = 7;
        expect(BooleanField_1.BooleanField.isValidType(value)).to.be.false;
    });
    it("should be serialized", function () {
        expect(BooleanField_1.BooleanField.serialize).to.be.true;
    });
    it("declares its type", function () {
        return expect(BooleanField_1.BooleanField.type).to.eq("boolean");
    });
    describe("normalize", function () {
        it("normalizes string \"true\" into boolean \"true\"", function () { return __awaiter(_this, void 0, void 0, function () {
            var value, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = "true";
                        _a = expect;
                        return [4, BooleanField_1.BooleanField.normalize(value)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.be.a("boolean").and.to.be.true;
                        return [2];
                }
            });
        }); });
        it("normalizes string \"false\" into boolean \"false\"", function () { return __awaiter(_this, void 0, void 0, function () {
            var value, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = "false";
                        _a = expect;
                        return [4, BooleanField_1.BooleanField.normalize(value)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.be.a("boolean").and.to.be.false;
                        return [2];
                }
            });
        }); });
        it("normalizes number \"1\" into boolean \"true\"", function () { return __awaiter(_this, void 0, void 0, function () {
            var value, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = 1;
                        _a = expect;
                        return [4, BooleanField_1.BooleanField.normalize(value)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.be.a("boolean").and.to.be.true;
                        return [2];
                }
            });
        }); });
        it("normalizes number \"0\" into boolean \"false\"", function () { return __awaiter(_this, void 0, void 0, function () {
            var value, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = 0;
                        _a = expect;
                        return [4, BooleanField_1.BooleanField.normalize(value)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.be.a("boolean").and.to.be.false;
                        return [2];
                }
            });
        }); });
        it("normalizes an empty string into boolean \"false\"", function () { return __awaiter(_this, void 0, void 0, function () {
            var value, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = "";
                        _a = expect;
                        return [4, BooleanField_1.BooleanField.normalize(value)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.be.a("boolean").and.to.be.false;
                        return [2];
                }
            });
        }); });
        it("normalizes NaN into boolean \"false\"", function () { return __awaiter(_this, void 0, void 0, function () {
            var value, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = NaN;
                        _a = expect;
                        return [4, BooleanField_1.BooleanField.normalize(value)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.be.a("boolean").and.to.be.false;
                        return [2];
                }
            });
        }); });
        it("normalizes a non-empty string into boolean \"true\"", function () { return __awaiter(_this, void 0, void 0, function () {
            var value, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = faker_1.random.word();
                        _a = expect;
                        return [4, BooleanField_1.BooleanField.normalize(value)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).to.be.a("boolean").and.to.be.true;
                        return [2];
                }
            });
        }); });
    });
});
