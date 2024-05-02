let Fn=0;
for (let i = 0; i <= 20; i++) {
    Fn=parseInt((1/Math.sqrt(5))*((((1+Math.sqrt(5))/2)**i)-(((1-Math.sqrt(5))/2)**i)));
    document.write("Số Fibonaci của số "+i+" tương đương là: "+Fn +"<br>");
}
let a=1;
b=1;
let s=0;
count =0;
while(count<20){
        s=a+b;
        a=b;
        b=s;
        document.write(`Số thứ ${count+1} là: ${s} <br>`);
        count++;
}
