let str = prompt("Enter Number");
if (str == str.split("").reverse().join("")) {
  alert("This Number is Polidrome");
} else {
  alert("This number is none polidrome");
}
