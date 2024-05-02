//hình 1
let n = 5;
let star = "";
for (let j = 0; j < n; j++) {
  star += "*";
  document.write(`${star}<br>`);
}
//hình 2
document.write("<br>");
for (let i = n; i >0; i--) {
    for (let j = i; j > 0; j--) {
        document.write("*");
    }
    document.write("<br>");
}
//hình 3
document.write("<br>");
for (let i = n; i >0; i--) {
    for (let j = i-1; j > 0; j--) {
        document.write("&ensp;");
    }
    for (let f = i; f <= n; f++) {
        document.write("*");
    }
    document.write("<br>");
}
//hình 4
document.write("<br>");
for (let i = 0; i <n; i++) {
    for (let j = i; j > 0; j--) {
        document.write("&ensp;");
    }
    for (let f = n; f > i; f--) {
        document.write("*");
    }
    document.write("<br>");
}
