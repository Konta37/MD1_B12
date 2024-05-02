let a=1;
b=1;
let s=0;
count =0;
while (count <1) {
        s=a+b;
        a=b;
        b=s;
        if (s%5==0) {
         document.write(s);
         count++;
         break;
        }
}
