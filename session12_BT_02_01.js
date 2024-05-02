let a=1;
b=1;
let s=0;
count =0;
for (let i = 0; i < 10; i++) {
   s=a+b;
   a=b;
   b=s;
   document.write(s+", ");
}