var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
var addShipping = function (price, shipping) {
    return price + shipping;
};
addShipping(11, 5);
var account01 = {
    name: 'Sergio',
    balance: 10
};
var accounts;
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () { };
    return InvestmentAccount;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add('Luis');
nameQueue.add('Andrei');
var numberQueue = new Queue();
numberQueue.add(7);
numberQueue.add(11);
var MenuItem01 = function (value) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = "abc";
            return _this;
        }
        return class_1;
    }(value));
};
var MenuItem02 = function (itemId) {
    return function (value) {
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.id = itemId;
                return _this;
            }
            return class_2;
        }(value));
    };
};
var Pizza = function () {
    var _classDecorators = [MenuItem01];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Pizza = _classThis = /** @class */ (function () {
        function Pizza_1(id) {
            this.id = id;
        }
        ;
        return Pizza_1;
    }());
    __setFunctionName(_classThis, "Pizza");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Pizza = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Pizza = _classThis;
}();
var ClazoneBase = /** @class */ (function () {
    function ClazoneBase() {
    }
    return ClazoneBase;
}());
var Hamburger = function () {
    var _classDecorators_1 = [MenuItem02("burga buga")];
    var _classDescriptor_1;
    var _classExtraInitializers_1 = [];
    var _classThis_1;
    var Hamburger = _classThis_1 = /** @class */ (function () {
        function Hamburger_1() {
        }
        return Hamburger_1;
    }());
    __setFunctionName(_classThis_1, "Hamburger");
    (function () {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        Hamburger = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return Hamburger = _classThis_1;
}();
var Ringo = function () {
    var _classDecorators_2 = [MenuItem02("Ringo people")];
    var _classDescriptor_2;
    var _classExtraInitializers_2 = [];
    var _classThis_2;
    var Ringo = _classThis_2 = /** @class */ (function () {
        function Ringo_1() {
            this.id = "";
        }
        return Ringo_1;
    }());
    __setFunctionName(_classThis_2, "Ringo");
    (function () {
        __esDecorate(null, _classDescriptor_2 = { value: _classThis_2 }, _classDecorators_2, { kind: "class", name: _classThis_2.name }, null, _classExtraInitializers_2);
        Ringo = _classThis_2 = _classDescriptor_2.value;
        __runInitializers(_classThis_2, _classExtraInitializers_2);
    })();
    return Ringo = _classThis_2;
}();
var Cheetos = /** @class */ (function () {
    function Cheetos() {
    }
    return Cheetos;
}());
var Clazone = MenuItem01(ClazoneBase);
console.log("This is Clazone Id: ".concat(new Clazone().id, "\n"));
console.log("This is Pizza Id: ".concat(new Pizza("Bulma").id, "\n"));
console.log("This is Hamburger Id: ".concat(new Hamburger().id, "\n"));
console.log("This is Ringo Id: ".concat(new Ringo().id, "\n"));
