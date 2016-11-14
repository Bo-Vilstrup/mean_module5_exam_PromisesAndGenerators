/*

 Execute the examples from (1) related to Constants and Scoping. Make sure you understand and can explain
 block-scoped variables in relation to ES5 (var) scoping and hoisting.
 In all the following exercises you should use let-declarations, unless you really have a reason for not doing
 so.

 Scoping
 Block-Scoped Functions
 ES 6
 */
"use strict";

{
    function foo() {return 1}
    console.log(foo() === 1);
    {
        function foo() {return 2}
        console.log(foo() === 2);
    }
    console.log(foo() === 1);
}

/*

 //  only in ES5 with the help of block-scope emulating
 //  function scopes and function expressions
 (function () {
 var foo = function () { return 1; }
 foo() === 1;
 (function () {
 var foo = function () { return 2; }
 foo() === 2;
 })();
 foo() === 1;
 })();
 */