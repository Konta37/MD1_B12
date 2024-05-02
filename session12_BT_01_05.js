let a=1;
b=1;
let s=0;
let s2=0;
count =0;
while (count <20) {
        s=a+b;
        a=b;
        b=s;
        s2=s2+s;
        document.write(`số thứ ${count+1} là: ${s} <br>`);
        count++;
}
document.write(`Tổng ${count} số Fibonacci là: ${s2}`);