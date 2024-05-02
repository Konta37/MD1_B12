let count =0;
let a=1;
let s=0;
while (count<30) {
    if (a%7==0) {
        count++;
        document.write(`Số thứ ${count} chia hết cho 7 là số ${a} <br>`);
        s=s+a;
    }
    a++;
}
document.write(`<br>Tổng 30 số chia hết cho 7 là: ${s}`);