var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDDING"] = 0] = "PENDDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFILLED"] = 2] = "FULFILLED";
})(STATUS || (STATUS = {}));
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    CODE[CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(CODE || (CODE = {}));
var say;
(function (say) {
    say[say["hello"] = 0] = "hello";
    say[say["bye"] = 1] = "bye";
})(say || (say = {}));
