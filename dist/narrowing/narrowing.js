// 1. Union type
// typeof
function print1(a) {
    if (typeof a === "string") {
        return a.toUpperCase();
    }
    return a;
}
// 2. Optional
function optionalFunc(sinhvien) {
    if (sinhvien) {
        console.log(sinhvien.name);
    }
}
optionalFunc({ name: "Dut", age: 19 });
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
})(ROLE || (ROLE = {}));
function login(user) {
    if ("is_admin" in user) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome back");
    }
}
login({ username: "abcd", password: "12345", email: "abcd", is_admin: false, role: ROLE.STAFF });
