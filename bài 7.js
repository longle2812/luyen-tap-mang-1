let array = [1,2,12,42,4,3,19,9,39,3];
let count = 0;
let V = +prompt("Nhập vào V");
var index;
for (let i = 0; i < (array.length); i++) {
    if (array[i] == V) {
        index = i;
        break;
    }
}
for (let i = index; i < (array.length);i++) {
    if (i < (array.length - 1)) {
        array[i] = array[i + 1];
    }
    else array[i] = "0";
}
document.write(array);