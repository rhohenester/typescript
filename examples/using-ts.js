var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function addWithTs(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(addWithTs(+input1.value, +input2.value));
});
//Important: https://web.archive.org/web/20180609155906/http://fullstack-developer.academy/cannot-redeclare-block-scoped-variable-name/
