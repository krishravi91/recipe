//noinspection JSUnusedLocalSymbols
/**
 * Created by Hey on 6 Jan 2017
 */
// Unfortunately still have to pollute the global namespace myself if not using webpack/requireJS
var Calculator = (function () {
    "use strict";

    var result, steps, nextDot;
    initialize();

    function initialize() {
        setResultToZero();
        steps = [];
        nextDot = false;
    }

    var ALL_NUMERICS = {};
    // [0..9]
    new Array(10).fill(0).forEach(function (_, index) {
        ALL_NUMERICS[index] = function () {
            if (nextDot) {
                nextDot = false;
                result = parseFloat(result.toString() + "." + index);
            } else {
                if (!hasDotInResult()) {
                    result = result * 10 + index;
                } else {
                    result = parseFloat(result.toString() + index);
                }
            }
        };
    });

    var ALL_OPERATORS = {};
    ["+", "-", "*", "/"].forEach(function (op) {
        ALL_OPERATORS[op] = function () {
            if (!isResultZero()) {
                steps.push(getFormattedResult());
            } else if (!hasSteps()) {
                steps.push("0");
            }
            setResultToZero();

            if (isAnOperator(getLastFrom(steps))) {
                steps[steps.length - 1] = op;
            } else {
                steps.push(op);
            }
        };
    });

    var exports = {
        "AC": function () {
            initialize();
        },
        "CE": function () {
            if (isResultZero()) {
                var removed = steps.splice(-1, 1);
                if (isAnOperator(removed)) {
                    result = steps.splice(-1, 1);
                }
            } else {
                setResultToZero();
            }
        },
        "BS": function () {
            var resultAsString = result.toString();
            if (isResultZero()) {
                var removed = steps.splice(-1, 1);
                if (isAnOperator(removed)) {
                    result = steps.splice(-1, 1);
                }
            } else {
                if (nextDot) {
                    nextDot = false;
                } else if (hasDotInResult()) {
                    var tempResult = getResultInStringWithoutLastCharacter();
                    if (tempResult.slice(-1) === ".") {
                        nextDot = true;
                        tempResult = getResultInStringWithoutLastCharacter();
                    }
                    result = parseFloat(tempResult);
                } else {
                    result = parseInt(result / 10);
                }
            }

            function getResultInStringWithoutLastCharacter() {
                return resultAsString.slice(0, -1);
            }
        }, ".": function () {
            if (!hasDotInResult()) {
                nextDot = true;
            }
        },
        "=": function () {
            function getProcessedSteps() {
                if (isResultZero() && isAnOperator(steps.slice(-1)[0])) {
                    steps.splice(-1, 1);
                }
                return exports.getSteps();
            }

            if (!isResultZero() || hasSteps()) {
                var str_steps = getProcessedSteps();
                //    Simple, but probably unsafe way is to use eval, but it is really simple one-liner.....
                result = eval(str_steps); // jshint ignore:line
                steps = [];
            } else {
                setResultToZero();
            }
        }, "+/-": function () {
            result *= -1;
        },

        // getters
        "getResult": function () {
            return resultAndAddDotIfNextDot();
        },
        "getSteps": function () {
            return steps.join("") + getFormattedResult();
        },
        "getLastOperator": function () {
            var lastOperators = steps.filter(function (step) {
                return (step in ALL_OPERATORS);
            });

            function hasLastOperators() {
                return lastOperators.length > 0;
            }

            return hasLastOperators() ? getLastFrom(lastOperators) : "";
        }
    };

    [
        ALL_NUMERICS,
        ALL_OPERATORS
    ].forEach(function (obj) {
        Object.keys(obj).forEach(function (key) {
            exports[key] = obj[key];
        });
    });

    function hasSteps() {
        return steps.length > 0;
    }

    function hasDotInResult() {
        return result.toString().indexOf(".") !== -1;
    }

    function isResultZero() {
        return result === 0;
    }

    function setResultToZero() {
        result = 0;
    }

    function isAnOperator(str) {
        return str in ALL_OPERATORS;
    }

    function getLastFrom(array) {
        return array.slice(-1)[0];
    }

    function getFormattedResult() {
        if (isResultZero()) {
            return "";
        } else {
            var resultAsString = result.toString();
            if ((hasSteps()) && (result < 0)) {
                return "(" + resultAsString + ")";
            } else {
                return resultAsString;
            }
        }
    }

    function resultAndAddDotIfNextDot() {
        return result.toString() + (nextDot ? "." : "");
    }

    if (typeof module !== "undefined") {
        module.exports = exports;
    }

    return exports;
}());

/**
 * Created by Hey on 8 Jan 2017
 */


var Calculator = Calculator || ((typeof require !== "undefined") ? require("./Calculator") : {});

(
    function (Calculator) {
        "use strict";

        var $holder = $("#holder");
        var $result = $('#result');
        var $steps = $('#steps');

        function updateUI() {
            $result.val(Calculator.getResult());
            $steps.val(Calculator.getSteps());
        }

        (function setUpOnce() {
            function addButtons() {
                var intRange3 = new Array(3).fill(0);
                var BTNS_RED = {
                    "AC": "",
                    "CE": ""
                };

                [
                    ["AC", "CE", ["backspace"], "/"],
                    ["7", "8", "9", "-"],
                    ["4", "5", "6", "*"],
                    ["1", "2", "3", "+"],
                    ["0", ".", "=", "+/-"]
                ].forEach(function (rowToAdd) {
                    var $row = $('<div class="row"></div>');
                    rowToAdd.forEach(function (buttonToAdd) {
                        var btn_class = (buttonToAdd in BTNS_RED) ? "btn-danger" : "btn-default";
                        if (buttonToAdd instanceof Array) {
                            btn_class += (" " + buttonToAdd[0]);
                            buttonToAdd = "BS";
                        }
                        var $div = $('<div class="col-xs-3"><button class="btn ' + btn_class + ' calc-btn" type="button">' + buttonToAdd + '</button></div>');
                        var $button = $div.find("button");
                        $button.click(function () {
                            Calculator[buttonToAdd]();
                            updateUI();
                        });
                        $row.append($div);
                    });
                    $holder.append($row);
                });
            }

            function setUpKeysControl() {
                $("body").keyup(function (event) {
                    var KEY_CODE_MAP = {
                        "Backspace":"BS",
                        ".": ".",
                        "=": "=",
                        "Enter": "=",
                        "+": "+",
                        "-": "-",
                        "*": "*",
                        "/": "/",
                        "F9": "+/-",
                        "A": "AC",
                        "a": "AC",
                        "Escape": "AC",
                        "C": "CE",
                        "c": "CE"
                    };
                    // {"48":"0, "49":"1", ......, "57":"9"}
                    new Array(10).fill(0).forEach(function (_, index) {
                        KEY_CODE_MAP[index] = index.toString();
                    });

                    var keyCode = event.key;
                    if (keyCode in KEY_CODE_MAP) {
                        event.preventDefault();
                        $("button:contains(" + KEY_CODE_MAP[keyCode] + ")").click();
                    }
                });
            }

            addButtons();
            setUpKeysControl();
            updateUI();
        }());
    }(Calculator)
);